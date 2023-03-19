let config = {
    "language": "sql",
    "colors": {
        "default": "#888",
        "Operator": "#6495ed",
        "DoubleOperator": "#0047c5",
        "Symbol": "#1f355d",
        "Keyword": "#d6440c",
        "Identifier": "#8e8989",
        "Number": "#08964e",
        "Float": "#03522a",
        "String": "#d68e0a",
        "Char": "#f7be56",
    },
};

if (typeof module !== 'undefined') {
    module.exports = {
        setup: core.setup,
        format: core.format,
    };
}
