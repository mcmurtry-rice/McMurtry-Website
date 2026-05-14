import React from 'react';
import { Box, Flex, Image } from 'rebass';
import Cards from '../../general/contactcards';
import { committee_divisions } from './committees.json';
import { fetchSheetCSV, parseCSV, sheetGid } from '../../../lib/googleSheets';

export default class Committees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            division: 0,
            committee: 0,
            membersData: {},
            isLoading: true
        };
        this.changeDivision = this.changeDivision.bind(this);
        this.changeCommittee = this.changeCommittee.bind(this);
    }

    async componentDidMount() {
        try {
            const members = await this.fetchMembersData();
            this.setState({ membersData: members, isLoading: false });
        } catch (error) {
            console.warn('Failed to fetch members:', error);
            this.setState({ isLoading: false });
        }
    }

    async fetchMembersData() {
        const csv = await fetchSheetCSV(sheetGid('committees'));
        return this.transformCSVData(csv);
    }

    transformCSVData(csvText) {
        const lines = parseCSV(csvText);

        // Map sheet committee names to JSON committee names
        const committeeNameMapping = {
            'Alumni and Family': 'Alumni',
            'Murtch': 'Murtchandise',
            'MIS': 'McMurtry Innovation Space (MIS)',
            'Website and App': 'Website',
            'Externals Socials': 'External Socials',
            'Internals Socials': 'Internal Socials',
            'Charity': 'Charity and Philanthropy'
        };

        // Row 2 (index 1) has committee names
        const committeeRow = lines[1] || [];
        const committees = {};

        // Parse committee names, tracking which columns have emails
        // Structure: CommitteeName, Email, CommitteeName, Email, ...
        for (let col = 0; col < committeeRow.length; col++) {
            const name = committeeRow[col];
            if (name && name !== 'Email') {
                // Remove emoji from name for matching
                let cleanName = name.replace(/[^\w\s()]/g, '').trim();
                if (committeeNameMapping[cleanName]) {
                    cleanName = committeeNameMapping[cleanName];
                }
                // Check if next column is an Email column (either labeled "Email" or empty)
                const nextCol = committeeRow[col + 1];
                const hasEmailColumn = nextCol === 'Email' || nextCol === '' || nextCol === undefined;
                committees[col] = { name: cleanName, heads: [], members: [], emailCol: hasEmailColumn ? col + 1 : null };
            }
        }

        // Parse members from row 3+ (index 2+)
        for (let rowIdx = 2; rowIdx < lines.length; rowIdx++) {
            const row = lines[rowIdx];
            for (const [colStr, committee] of Object.entries(committees)) {
                const col = parseInt(colStr);
                const memberName = row[col];
                if (memberName) {
                    // Get email from adjacent Email column if it exists
                    const email = committee.emailCol !== null ? (row[committee.emailCol] || '') : '';

                    // Check if name ends with asterisk (head)
                    if (memberName.trim().endsWith('*')) {
                        const cleanName = memberName.trim().replace(/\*$/, '').trim();
                        committee.heads.push({ name: cleanName, email: email.trim() });
                    } else {
                        committee.members.push({ name: memberName.trim(), email: email.trim() });
                    }
                }
            }
        }

        // Return as { committeeName: { heads: [...], members: [...] } }
        const result = {};
        for (const committee of Object.values(committees)) {
            result[committee.name] = {
                heads: committee.heads,
                members: committee.members
            };
        }
        return result;
    }

    changeDivision(index) {
        this.setState({
            division: index,
            committee: 0
        })
    }

    changeCommittee(index) {
        this.setState({ committee: index })
    }

    render() {

        let division_keys = []
        for (let i = 0; i < committee_divisions.length; i++) {
            division_keys.push(
                <Box key={committee_divisions[i].division}>
                    <div onClick={() => this.changeDivision(i)} className={this.state.division === i ? "active-division" : "inactive-division"}>
                        <p className='division-key'>{`${committee_divisions[i].division}`}</p>
                    </div>
                </Box>
            )
        }
        const current_division = committee_divisions[this.state.division]
        let committee_keys = []
        for (let j = 0; j < current_division.committees.length; j++) {
            committee_keys.push(
                <Box key={current_division.committees[j].name}>
                    <div onClick={() => this.changeCommittee(j)} className={this.state.committee === j ? "active-committee" : "inactive-committee"}>
                        <p className='committee-key'>{current_division.committees[j].name}</p>
                    </div>
                </Box>
            )
        }

        return (
            <div className="committee-page">
                <div className='committee-hero'>
                    <h1 className='committee-main-title'>Committees</h1>
                </div>
                <div>
                    {/* Fixed flexWrap prop */}
                    <Flex justifyContent='center' flexWrap='wrap' flexDirection='row'>
                        {division_keys}
                    </Flex>
                </div>
                <div>
                    {/* Fixed flexWrap prop */}
                    <Flex justifyContent='center' flexWrap='wrap' flexDirection='row'>
                        {committee_keys}
                    </Flex>
                </div>
                <div>
                    <Box width={[0.9, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='committee-description'>
                        <h1 className='division-title'>{committee_divisions[this.state.division].committees[this.state.committee].name}</h1>
                        <Box width={[1, .75]} mx='auto' >
                            <Image key={committee_divisions[this.state.division].committees[this.state.committee].image}
                                   src={committee_divisions[this.state.division].committees[this.state.committee].image} />
                        </Box>
                        <div dangerouslySetInnerHTML={{ __html: committee_divisions[this.state.division].committees[this.state.committee].description }}></div>
                    </Box>
                    {this.renderHeadsAndMembers()}
                </div>
            </div>
        )
    }

    renderHeadsAndMembers() {
        const currentCommittee = committee_divisions[this.state.division].committees[this.state.committee];
        const sheetData = this.state.membersData[currentCommittee.name];

        // Get heads: prefer live data from sheet, fall back to static JSON
        const liveHeads = sheetData?.heads || [];
        const staticHeads = currentCommittee.heads || [];
        const heads = liveHeads.length > 0 ? liveHeads : staticHeads;

        // Get members from sheet
        const members = sheetData?.members || [];

        if (this.state.isLoading) {
            return (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p className="loading-text">Loading...</p>
                </div>
            );
        }

        return (
            <>
                {heads.length > 0 && (
                    <>
                        <h2 className='committee-subtitle'>Committee Heads</h2>
                        <Cards content={heads} minHeight="110px" width={240} />
                    </>
                )}
                {members.length > 0 && (
                    <>
                        <h2 className='committee-subtitle'>Committee Members</h2>
                        <Cards content={members} minHeight="110px" width={240} />
                    </>
                )}
            </>
        );
    }
}