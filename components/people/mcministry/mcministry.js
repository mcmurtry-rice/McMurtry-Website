import React from 'react';
import { Box } from 'rebass';
import Cards from '../../general/contactcards';

class McMinistry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Executive Council',
            executive_council: [],
            mccabinet: [],
            peoples_council: [],
            isLoading: true
        };
    }

    async componentDidMount() {
        try {
            const data = await this.fetchMinistryData();
            this.setState({
                executive_council: data.executive_council,
                mccabinet: data.mccabinet,
                peoples_council: data.peoples_council,
                isLoading: false
            });
        } catch (error) {
            console.warn('Failed to fetch ministry data:', error);
            this.setState({ isLoading: false });
        }
    }

    async fetchMinistryData() {
        const publishedId = '2PACX-1vQVucTQycbkgZLV37wpbxOVXTTv0rUPdNjeX42jIveWxBUOfXb6RNXAefylw3IESa8hcYOVucPPLAJz';
        const gid = '405858748'; // McMinistry sheet
        const cacheBuster = Date.now();

        const url = `https://docs.google.com/spreadsheets/d/e/${publishedId}/pub?gid=${gid}&single=true&output=csv&_=${cacheBuster}`;

        const response = await fetch(url);
        const text = await response.text();

        return this.transformCSVData(text);
    }

    transformCSVData(csvText) {
        // Parse CSV
        const lines = csvText.split('\n').map(line => {
            const result = [];
            let current = '';
            let inQuotes = false;
            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                if (char === '"') {
                    inQuotes = !inQuotes;
                } else if (char === ',' && !inQuotes) {
                    result.push(current.trim());
                    current = '';
                } else {
                    current += char;
                }
            }
            result.push(current.trim());
            return result;
        });

        const executive_council = [];
        const peoples_council = [];

        // Sheet structure:
        // Row 1: "Executive Council (EC)🌟" header | empty cols | "People's Council (PC)" header
        // Row 2: Position headers - each position followed by Email, Year columns
        // Row 3+: Data - multiple rows can have names under each position

        // Get the header row (row 2, index 1) to find position names
        const headerRow = lines[1] || [];

        // Find section boundaries in row 1
        const row1 = lines[0] || [];
        let mcCabinetHeaderCol = -1;
        let pcHeaderCol = -1;

        for (let i = 0; i < row1.length; i++) {
            if (row1[i] && row1[i].includes("McCabinet")) {
                mcCabinetHeaderCol = i;
            }
            if (row1[i] && row1[i].includes("People's Council")) {
                pcHeaderCol = i;
            }
        }

        // Find the actual start of PC positions in row 2 (first position after McCabinet's columns)
        // McCabinet has: Parliamentarian (col 25), Email (26), Year (27), then empty col (28)
        // PC positions start at col 29
        // We need to find the first non-empty, non-Email, non-Year column after McCabinet
        let pcActualStartCol = pcHeaderCol; // fallback to header position
        if (mcCabinetHeaderCol !== -1) {
            // Start looking after McCabinet header + 3 (position + email + year)
            for (let col = mcCabinetHeaderCol + 3; col < headerRow.length; col++) {
                const header = headerRow[col];
                if (header && header !== 'Email' && header !== 'Year') {
                    pcActualStartCol = col;
                    break;
                }
            }
        }

        // Find all position columns (columns that are not "Email" or "Year" and have a value)
        const ecPositions = []; // { col: number, name: string }
        const mcCabinetPositions = [];
        const pcPositions = [];

        for (let col = 0; col < headerRow.length; col++) {
            const header = headerRow[col];
            if (header && header !== 'Email' && header !== 'Year') {
                const positionInfo = { col, name: header.replace(/\s*\([^)]*\)\s*/g, '').trim() };

                // Determine which section this column belongs to
                // PC: from pcActualStartCol onwards
                // McCabinet: from mcCabinetHeaderCol up to pcActualStartCol
                // EC: before mcCabinetHeaderCol
                if (col >= pcActualStartCol) {
                    pcPositions.push(positionInfo);
                } else if (mcCabinetHeaderCol !== -1 && col >= mcCabinetHeaderCol) {
                    mcCabinetPositions.push(positionInfo);
                } else {
                    ecPositions.push(positionInfo);
                }
            }
        }

        // Parse EC positions
        for (const pos of ecPositions) {
            for (let rowIdx = 2; rowIdx < lines.length; rowIdx++) {
                const row = lines[rowIdx];
                const name = (row[pos.col] || '').trim();
                if (name) {
                    executive_council.push({
                        position: pos.name,
                        name: name,
                        email: (row[pos.col + 1] || '').trim(),
                        year: (row[pos.col + 2] || '').trim()
                    });
                }
            }
        }

        // Parse McCabinet positions
        const mccabinet = [];
        for (const pos of mcCabinetPositions) {
            for (let rowIdx = 2; rowIdx < lines.length; rowIdx++) {
                const row = lines[rowIdx];
                const name = (row[pos.col] || '').trim();
                if (name) {
                    mccabinet.push({
                        position: pos.name,
                        name: name,
                        email: (row[pos.col + 1] || '').trim(),
                        year: (row[pos.col + 2] || '').trim()
                    });
                }
            }
        }

        // Parse PC positions
        for (const pos of pcPositions) {
            for (let rowIdx = 2; rowIdx < lines.length; rowIdx++) {
                const row = lines[rowIdx];
                const name = (row[pos.col] || '').trim();
                if (name) {
                    peoples_council.push({
                        position: pos.name,
                        name: name,
                        email: (row[pos.col + 1] || '').trim(),
                        year: (row[pos.col + 2] || '').trim()
                    });
                }
            }
        }

        return { executive_council, mccabinet, peoples_council };
    }

    render() {
        const { activeTab, executive_council, mccabinet, peoples_council, isLoading } = this.state;

        const tabs = [
            { id: 'Executive Council', data: executive_council },
            { id: 'McCabinet', data: mccabinet },
            { id: "People's Council", data: peoples_council }
        ];

        const activeData = tabs.find(t => t.id === activeTab)?.data || [];

        return (
            <div className='mcministry-page'>
                <div className='mcministry-hero'>
                    <h1 className='mcministry-main-title'>McMinistry</h1>
                </div>

                <div className='mcministry-tabs'>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`ministry-tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => this.setState({ activeTab: tab.id })}
                        >
                            {tab.id}
                        </button>
                    ))}
                </div>

                {isLoading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p className="loading-text">Loading...</p>
                    </div>
                ) : (
                    <div className='fade-in' key={activeTab}>
                        <Box width={[330]} ml='auto' mr='auto'>
                            <h2 className='division-title'>{activeTab}</h2>
                        </Box>
                        <Cards content={activeData} width={[270]} />
                    </div>
                )}
            </div>
        );
    }
}

export default McMinistry;
