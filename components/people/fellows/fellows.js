import React from 'react';
import { Box } from 'rebass';
import ContactCards from '../../general/contactcards';

class AcademicFellows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Head Academic Fellows',
            headFellows: [],
            fellows: [],
            isLoading: true
        };
    }

    async componentDidMount() {
        try {
            const data = await this.fetchFellowsData();
            this.setState({
                headFellows: data.headFellows,
                fellows: data.fellows,
                isLoading: false
            });
        } catch (error) {
            console.warn('Failed to fetch Fellows data:', error);
            this.setState({ isLoading: false });
        }
    }

    async fetchFellowsData() {
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

        // Find Academic Fellows column by looking at header row
        // Sheet structure: PAAs sections first, then Academic Fellows section
        // Academic Fellows: Name (with * for heads), Email, Major, Course, Track
        const headerRow = lines[0] || [];

        let fellowsStartCol = -1;

        // Find column index for Academic Fellows
        for (let i = 0; i < headerRow.length; i++) {
            const header = (headerRow[i] || '').toLowerCase().trim();
            if (header.includes('academic fellow') || header.includes('fellows')) {
                fellowsStartCol = i;
                break;
            }
        }

        const headFellows = [];
        const fellows = [];

        // Parse data rows (starting from row 1, after header)
        for (let rowIdx = 1; rowIdx < lines.length; rowIdx++) {
            const row = lines[rowIdx];

            if (fellowsStartCol >= 0) {
                let name = (row[fellowsStartCol] || '').trim();
                if (name) {
                    // Skip header row values (Name, Email, Major, Course, Track)
                    const nameLower = name.toLowerCase();
                    if (nameLower === 'name' || nameLower === 'email' || nameLower === 'major' ||
                        nameLower === 'course' || nameLower === 'track') {
                        continue;
                    }

                    const isHead = name.includes('*');
                    // Remove asterisk from name for display
                    name = name.replace(/\*/g, '').trim();

                    const email = (row[fellowsStartCol + 1] || '').trim();
                    const major = (row[fellowsStartCol + 2] || '').trim();
                    const subjects = (row[fellowsStartCol + 3] || '').trim();
                    const pre_prof_path = (row[fellowsStartCol + 4] || '').trim();

                    // Skip if values are just header labels
                    const emailClean = email.toLowerCase() === 'email' ? '' : email;
                    const majorClean = major.toLowerCase() === 'major' ? '' : major;
                    const subjectsClean = subjects.toLowerCase() === 'course' ? '' : subjects;
                    const trackClean = pre_prof_path.toLowerCase() === 'track' ? '' : pre_prof_path;

                    // Build person object, only including fields that have data
                    const person = { name };
                    if (emailClean) person.email = emailClean;
                    if (majorClean) person.major = majorClean;
                    if (subjectsClean) person.subjects = subjectsClean;
                    if (trackClean) person.pre_prof_path = trackClean;

                    if (isHead) {
                        headFellows.push(person);
                    } else {
                        fellows.push(person);
                    }
                }
            }
        }

        return { headFellows, fellows };
    }

    render() {
        const { activeTab, headFellows, fellows, isLoading } = this.state;

        const tabs = [
            { id: 'Head Academic Fellows', data: headFellows },
            { id: 'Academic Fellows', data: fellows }
        ];

        const activeData = tabs.find(t => t.id === activeTab)?.data || [];

        return (
            <div className='fellows-page'>
                <div className='fellows-hero'>
                    <h1 className='fellows-main-title'>Academic Fellows</h1>
                </div>

                <Box width={[1, 0.8, 0.7]} ml='auto' mr='auto' className='fellows-description'>
                    Fellows are upperclassmen who were selected based on proven academic achievement and demonstrated willingness to help fellow students. As part of their charge, Fellows provide free academic assistance on a regular basis through advertised review sessions, "office hours" in the college commons, and individual tutoring by request.
                </Box>

                <div className='fellows-tabs'>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`fellows-tab ${activeTab === tab.id ? 'active' : ''}`}
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
                        <Box width={[0.8, 0.5]} className='subtitle' ml='auto' mr='auto'>
                            <h2>{activeTab}</h2>
                        </Box>
                        <div style={{ marginTop: '2%' }}>
                            <ContactCards content={activeData} width={280} minHeight="230px" />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default AcademicFellows;
