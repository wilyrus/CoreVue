type TimelineState = {
    title: string,
    subtitle: string,
    description: string
};

export interface TimelinesState {
    timelines: Array<TimelineState>;
}

type TimelineStore = {
    state: TimelinesState
};

const store: TimelineStore = {
    state: {
        timelines: [
            {
                title: 'name1',
                subtitle: 'subname1',
                description: 'description1'
            },
            {
                title: 'name2',
                subtitle: 'subname2',
                description: 'description2'
            },
            {
                title: 'name3',
                subtitle: 'subname3',
                description: 'description3'
            },
            {
                title: 'name4',
                subtitle: 'subname4',
                description: 'description4'
            },
            {
                title: 'name5',
                subtitle: 'subname5',
                description: 'description5'
            },
            {
                title: 'name6',
                subtitle: 'subname6',
                description: 'description6'
            }
        ]
    }
};

export default store;
