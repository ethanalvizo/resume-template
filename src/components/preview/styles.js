export const content = () => ({
    preview: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        padding: '2rem',
        borderRadius: '5px',
        // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        // backgroundColor: "#eee"
    },
    subtitle: {
        textTransform: 'uppercase',
        fontSize: '16px',
        textAlign: 'left',
        fontWeight: 'bold',
    }
});

export const header = () => ({
    root: {
        borderBottom: '2px solid grey',
        // backgroundColor: "#eee",
        padding: '1em 0em',
        margin: '0em 2em'
    },
    personal: {
        fontSize: '26px',
        textAlign: 'left',
    },
    title: {
        fontSize: '14px',
        textAlign: 'left',
    },
    contact: {
        fontSize: '12px',
        textAlign: 'right',
    },
});

export const experience = () => ({
    jobTitle: {
        textAlign: 'left',
        color: 'green',
        fontWeight: 'bold',
        fontSize: '14px',
    },
    divider: {
        color: 'black',
        fontSize: '16px',
    },
    jobPosition: {
        color: 'black',
        fontStyle: 'italic',
        fontSize: '13px',
    },
    jobDate: {
        textAlign: 'right',
        fontSize: '13px',
        color: '#666666'
    }
});

export const project = () => ({
    name: {
        textAlign: 'left',
        color: 'green',
        fontWeight: 'bold',
        fontSize: '14px',
    },
    divider: {
        color: 'black',
        fontSize: '16px',
    },
    technology: {
        color: 'black',
        fontStyle: 'italic',
        fontSize: '13px',
    },
});

export const education = () => ({
    school: {
        textAlign: 'left',
        color: 'green',
        fontWeight: 'bold',
        fontSize: '14px',
    },
    divider: {
        color: 'black',
        fontSize: '16px',
    },
    subject: {
        color: 'black',
        fontStyle: 'italic',
        fontSize: '13px',
    },
    date: {
        textAlign: 'right',
        fontSize: '13px',
        color: '#666666'
    },
    relevant: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '14px',
    },
    relevantInfo: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '14px',
    }
});