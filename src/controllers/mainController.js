const { loadProduct } = require ("../data/dbModules")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		// Do the magic
		let products = loadProduct()
		let productsVisited = products.filter(product => product.category === "visited");
		let productsInsale = products.filter(product => product.category === "in-sale")
		return res.render("index",{
			productsVisited,
			productsInsale,
			toThousand
		})
	},
	search: (req, res) => {
		// Do the magic
		let products = loadProduct()
		let {keywords} = req.query
		let result = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase()));
		return res.render("results",{
			result,
			toThousand,
			keywords
		})
	},
};

module.exports = controller;
