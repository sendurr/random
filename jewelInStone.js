const j = "abC";
const s = "abcwdfsfsdfCdfsfaaa";

const getJewelInStone = (j, s) => {
    const jewel= "/" + j + "/g";
    const jewelRegex = new RegExp("[" + j + "]", "g");
    return s.match(jewelRegex).length;
};

console.log(`the count is ${getJewelInStone(j, s)}`);