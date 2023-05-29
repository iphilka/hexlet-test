export default (content) => {
    const data = content.split('\r\n').slice(1, -1).map((item) => {
        return item.split(',')
    });
    return data;
};
