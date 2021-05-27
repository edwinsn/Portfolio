import { Component } from 'react'


class Progres extends Component {

    constructor(props) {
        super(props)
        this.phoneLenght = 968.75
        let phoneView = window.innerWidth < this.phoneLenght
        this.state = {
            page: 0,
            previousPage: 0,
            phoneView,
            background: phoneView ? "white" : "black"
        }

    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            let page = Math.floor(scrollTop / clientHeight + 0.25)

            if (page !== this.state.previousPage) {
                this.setState({ page, previousPage: page })
            }
        })


        window.onresize = () => {

            if (window.innerWidth < this.phoneLenght) {
                if (!this.state.phoneView) {
                    this.setState({ background: "white", phoneView: true })
                }
            }
            else if (this.state.phoneView) {
                this.setState({ background: "black", phoneView: false })
            }
        }
    }


    render() {
        console.log("Progress rendered")
        let items = []
        let hrefs = ["#main", "#about"]
        let color = "rgb(197, 40, 40)"
        let fontSize = "larger"
        let active = { color, fontSize }
        let defaultStyle = { color: this.state.background }

        for (let i = 1; i < 3; i++) {
            let style = defaultStyle
            if (i - 1 === this.state.page) style = active
            items.push(<a href={hrefs[i - 1]} key={i} style={style}>0{i}</a>)
        }

        let style = defaultStyle
        if (this.state.page < 5 && this.state.page > 1) style = active
        items.push(<a key={3} href="#projects" style={style}>03</a>)

        style = defaultStyle
        if (this.state.page === 5) style = active
        items.push(<a href="#contact" key={4} style={style}>04</a>)


        return (
            <div className="progres">
                {items}
            </div>
        )
    }

}
export default Progres