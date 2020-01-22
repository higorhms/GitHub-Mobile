import React from 'react';

import createRouter from '~/routes';

export default function RoutesManager() {
    const signed = false;

    const Routes = createRouter(signed);

    return <Routes />;
}
