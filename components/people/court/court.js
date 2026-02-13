import React from "react";
import { Box } from "rebass";
import Cards from "../../general/contactcards";

class Court extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Chief Justices',
      justices: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    try {
      const justices = await this.fetchCourtData();
      this.setState({ justices, isLoading: false });
    } catch (error) {
      console.warn('Failed to fetch court data:', error);
      this.setState({ isLoading: false });
    }
  }

  async fetchCourtData() {
    // Use the published spreadsheet URL
    const publishedId = '2PACX-1vQVucTQycbkgZLV37wpbxOVXTTv0rUPdNjeX42jIveWxBUOfXb6RNXAefylw3IESa8hcYOVucPPLAJz';
    const gid = '1699321769'; // Mccourt sheet
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

    const justices = [];

    // Sheet structure:
    // Row 1: McMurtry Court header
    // Row 2: Chief Justice (CJ) | Email | Room | Phone | Associate Justices (AJs) | Email | Room
    // Row 3+: Data

    // Parse Chief Justices (column A=0, B=1 email, C=2 room, D=3 phone)
    for (let rowIdx = 2; rowIdx < lines.length; rowIdx++) {
      const row = lines[rowIdx];
      const name = row[0];
      if (name) {
        justices.push({
          position: 'Chief Justice',
          name: name.trim(),
          email: (row[1] || '').trim(),
          room: (row[2] || '').trim(),
          phone: (row[3] || '').trim()
        });
      }
    }

    // Parse Associate Justices (column E=4, F=5 email, G=6 room)
    for (let rowIdx = 2; rowIdx < lines.length; rowIdx++) {
      const row = lines[rowIdx];
      const name = row[4];
      if (name) {
        justices.push({
          position: 'Associate Justice',
          name: name.trim(),
          email: (row[5] || '').trim(),
          room: (row[6] || '').trim()
        });
      }
    }

    return justices;
  }

  render() {
    const { activeTab, justices, isLoading } = this.state;

    const chiefs = justices.filter((justice) => justice.position === "Chief Justice");
    const associates = justices.filter((justice) => justice.position === "Associate Justice");

    const tabs = [
      { id: 'Chief Justices', data: chiefs },
      { id: 'Associate Justices', data: associates }
    ];

    const activeData = tabs.find(t => t.id === activeTab)?.data || [];

    return (
      <div className="court-page">
        <div className='court-hero'>
          <h1 className='court-main-title'>McCourt</h1>
        </div>

        <div className='court-tabs'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`court-tab ${activeTab === tab.id ? 'active' : ''}`}
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
            <Box width={[330]} ml="auto" mr="auto">
              <h2 className="division-title">{activeTab}</h2>
            </Box>
            <Cards content={activeData} width={[270]} minHeight="160px" />
          </div>
        )}
      </div>
    );
  }
}

export default Court;
