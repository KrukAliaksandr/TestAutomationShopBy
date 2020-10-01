const Collection = require("../wrappers/Collection");
const Component = require("./Component");
const Element = require("../wrappers/Element");

class ComputerSection extends Component{
	constructor(selector= "#section-736.SectionPresentation") {
		super(selector);
		this.items = {type:"Collection", selector:".Page__BlockLink"};
	}
}

module.exports = ComputerSection;