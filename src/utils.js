const utils ={
    formatCurrency: (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
};

export default utils;
