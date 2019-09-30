import fetch from 'isomorphic-unfetch';

import { Button } from '@material-ui/core';

const API_URL = 'http://localhost:3000';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campaign: {}
        } 
    }

    componentDidMount() {
        var self = this;
        self.getAllCampaigns().then(campaigns => {
            self.state.campaigns = campaigns;
        });
    }

    render(){
        return(
            <div>
                {this.state.campaigns.map(c => <CampaignCard campaignName="{c.name}" emailNodes="5" memberCount="10" />)}
                <Button size="large">New...</Button>
            </div>
        );
    }

    getAllCampaigns = async () => {
        const res = await fetch(API_URL + '/campaign');
        const data = await res.json();
    
        console.log(`data fetched. Count: ${data.length}`);
    
        return {
            campaigns: data
        };
    }
};

export default Campaign;