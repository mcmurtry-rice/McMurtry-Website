import React from 'react';
import { Box } from 'rebass';
import ContactCards from '../../general/contactcards';

class PAAs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Head PAAs',
            head_paas: [],
            o_week_paas: [],
            year_long_paas: [],
            isLoading: true
        };
    }

    async componentDidMount() {
        try {
            const data = await this.fetchPAAsData();
            this.setState({
                head_paas: data.head_paas,
                o_week_paas: data.o_week_paas,
                year_long_paas: data.year_long_paas,
                isLoading: false
            });
        } catch (error) {
            console.warn('Failed to fetch PAAs data:', error);
            this.setState({ isLoading: false });
        }
    }

    async fetchPAAsData() {
        const publishedId = '2PACX-1vQVucTQycbkgZLV37wpbxOVXTTv0rUPdNjeX42jIveWxBUOfXb6RNXAefylw3IESa8hcYOVucPPLAJz';
        const gid = '519315703';
        const cacheBuster = Date.now();

        const url = `https://docs.google.com/spreadsheets/d/e/${publishedId}/pub?gid=${gid}&single=true&output=csv&_=${cacheBuster}`;

        const response = await fetch(url);
        const text = await response.text();

        return this.transformCSVData(text);
    }

    transformCSVData(csvText) {
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

        const head_paas = [];
        const o_week_paas = [];
        const year_long_paas = [];

        for (let rowIdx = 1; rowIdx < lines.length; rowIdx++) {
            const row = lines[rowIdx];

            const headName = (row[0] || '').trim();
            if (headName) {
                head_paas.push({
                    name: headName,
                    major: (row[1] || '').trim(),
                    minor: (row[2] || '').trim(),
                    pre_prof_path: (row[3] || '').trim(),
                    email: (row[4] || '').trim(),
                    year: (row[5] || '').trim()
                });
            }

            const oweekName = (row[6] || '').trim();
            if (oweekName) {
                o_week_paas.push({
                    name: oweekName,
                    major: (row[7] || '').trim(),
                    minor: (row[8] || '').trim(),
                    pre_prof_path: (row[9] || '').trim(),
                    email: (row[10] || '').trim(),
                    year: (row[11] || '').trim()
                });
            }

            const yearLongName = (row[12] || '').trim();
            if (yearLongName) {
                year_long_paas.push({
                    name: yearLongName,
                    major: (row[13] || '').trim(),
                    minor: (row[14] || '').trim(),
                    pre_prof_path: (row[15] || '').trim(),
                    email: (row[16] || '').trim(),
                    year: (row[17] || '').trim()
                });
            }
        }

        return { head_paas, o_week_paas, year_long_paas };
    }

    render() {
        const { activeTab, head_paas, o_week_paas, year_long_paas, isLoading } = this.state;

        const tabs = [
            { id: 'Head PAAs', data: head_paas },
            { id: 'O-Week PAAs', data: o_week_paas },
            { id: 'Year Long PAAs', data: year_long_paas }
        ];

        const activeData = tabs.find(t => t.id === activeTab)?.data || [];

        return (
            <div className='paas-page'>
                <div className='paas-hero'>
                    <h1 className='paas-main-title'>Peer Academic Advisors</h1>
                </div>

                <Box width={[1, 0.8, 0.7]} ml='auto' mr='auto' className='paas-description'>
                    PAAs provide peer advice to fellow students about a wide range of academically-related topics. With personal experience as a Rice student and training from the Office of Academic Advising, PAAs offer accurate advice regarding specific courses, co-curricular opportunities, academic rules and procedures, and a wide range of other topics.
                </Box>

                <div className='paas-tabs'>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`paas-tab ${activeTab === tab.id ? 'active' : ''}`}
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
                        <Box width={320} ml='auto' mr='auto'>
                            <h1 className='paas-title'>{activeTab}</h1>
                        </Box>
                        <ContactCards content={activeData} width={activeTab === 'Year Long PAAs' ? 300 : 280} minHeight="180px" />
                    </div>
                )}
            </div>
        );
    }
}

export default PAAs;
