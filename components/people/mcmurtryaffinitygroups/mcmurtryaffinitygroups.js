import React from "react";
import { Box } from "rebass";
import ContactCards from "../../general/contactcards";

export default class McMurtryAffinityGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      affinityGroups: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    try {
      const groups = await this.fetchAffinityData();
      this.setState({ affinityGroups: groups, isLoading: false });
    } catch (error) {
      console.warn('Failed to fetch affinity groups data:', error);
      this.setState({ isLoading: false });
    }
  }

  async fetchAffinityData() {
    const publishedId = '2PACX-1vQVucTQycbkgZLV37wpbxOVXTTv0rUPdNjeX42jIveWxBUOfXb6RNXAefylw3IESa8hcYOVucPPLAJz';
    const gid = '521639587'; // Affinity Groups sheet
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

    // Sheet structure:
    // Row 1: "Diversity Council (DC)" header
    // Row 2: Group names with Email columns - Black Caucus | Email | East Asian | Email | ...
    // Row 3+: Member names and emails

    const headerRow = lines[1] || [];
    const groups = {};

    // Map sheet names to display titles
    const groupTitleMapping = {
      'Black Caucus': 'Black Caucus',
      'East Asian': 'East Asian',
      'FGLI': 'First Gen / Low Income',
      'Jewish': 'Jewish',
      'Latine': 'Latine',
      'LGBTQ+': 'LGBTQ+',
      'South Asian': 'South Asian'
    };

    // Find group columns (columns that are not "Email" and have a value)
    for (let col = 0; col < headerRow.length; col++) {
      const header = headerRow[col];
      if (header && header !== 'Email') {
        const title = groupTitleMapping[header] || header;
        groups[col] = { title, members: [] };
      }
    }

    // Parse members from row 3+ (index 2+)
    for (let rowIdx = 2; rowIdx < lines.length; rowIdx++) {
      const row = lines[rowIdx];
      for (const [colStr, group] of Object.entries(groups)) {
        const col = parseInt(colStr);
        const name = (row[col] || '').trim();
        if (name) {
          const email = (row[col + 1] || '').trim();
          group.members.push({ name, email });
        }
      }
    }

    // Convert to array and sort by title
    const groupOrder = ['Black Caucus', 'East Asian', 'First Gen / Low Income', 'Jewish', 'Latine', 'LGBTQ+', 'South Asian'];
    return Object.values(groups)
      .filter(g => g.members.length > 0)
      .sort((a, b) => {
        const aIdx = groupOrder.indexOf(a.title);
        const bIdx = groupOrder.indexOf(b.title);
        if (aIdx === -1 && bIdx === -1) return a.title.localeCompare(b.title);
        if (aIdx === -1) return 1;
        if (bIdx === -1) return -1;
        return aIdx - bIdx;
      });
  }

  render() {
    const { affinityGroups, isLoading } = this.state;

    return (
      <div className="mcmurtry-affinity-groups-page">
        <div className='affinity-hero'>
          <h1 className='affinity-main-title'>McMurtry Affinity Groups</h1>
        </div>
        <Box width={[0.8, 0.5]} ml="auto" mr="auto">
          <p>
            Affinity Groups at McMurtry, as extensions of the Diversity Council,
            aim to foster a sense of community among certain student populations
            including LGBTQ+, Black, Latinx, Jewish, and First-Gen/Low Income.
            These groups will be hosting movie nights, game nights, and other
            events throughout the semester in order to support and encourage
            connections in these groups. If you identify with one or more of
            these groups, we highly encourage you to join the group chats, meet
            new Murts and participate in any upcoming events!
          </p>
          <p>
            Each Affinity group has a designated liaison who acts as a bridge
            between the group and the Diversity Council. These are some really
            cool Murts who will be hosting events and activities for you all to
            enjoy. If you have any questions about a specific group, please feel
            free to reach out to the associated liaison or any member in the
            Diversity Council.
          </p>
          <p>
            If you are interested in joining one of the affinity groups, please
            reach out to the affinity group heads listed below
          </p>
        </Box>
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading...</p>
          </div>
        ) : (
          affinityGroups.map((group) => (
            <div key={group.title} className="fade-in">
              <Box width={320} ml="auto" mr="auto">
                <h1 className="affinity-group-title">{group.title}</h1>
              </Box>
              <ContactCards content={group.members} width={280} minHeight="180px" />
            </div>
          ))
        )}
      </div>
    );
  }
}
