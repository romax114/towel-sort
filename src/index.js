
// You should implement your task here.

module.exports = function towelSort (m = []) {
    if(!m.length) return [];
    m.map(a => {if(m.indexOf(a) % 2) a.reverse()});
    return m.flat();
}
