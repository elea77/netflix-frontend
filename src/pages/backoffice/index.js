import React from 'react';
import withAuthAdmin from '../../HOC/withAuthAdmin';

const Index = () => {
    return (
        <div>
            dashboard
        </div>
    );
};
export default withAuthAdmin(Index);