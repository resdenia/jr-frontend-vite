import ResizableBox from '../../../AdminComponents/ResizableBox';
import useDemoConfig from '../useDemo';
import React from 'react';
import { Chart } from 'react-charts';

export default function Line() {
    const { data, randomizeData } = useDemoConfig({
        series: 1,
        dataType: 'time',
    });

    const primaryAxis = React.useMemo(
        () => ({
            getValue: (datum) => datum.primary,
            show: false,
        }),
        [],
    );

    const secondaryAxes = React.useMemo(
        () => [
            {
                getValue: (datum) => datum.secondary,
                show: false,
                showDatumElements: false,
            },
        ],
        [],
    );

    return (
        <>
            <ResizableBox width={300} height={40}>
                <Chart
                    options={{
                        data,
                        primaryAxis,
                        secondaryAxes,
                    }}
                />
            </ResizableBox>
        </>
    );
}
