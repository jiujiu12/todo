import '../assets/styles/footer.styl'
export default{
    data(){
        return{
            author: 'aaamiao'
        }
    },
    render(){
        return(
            <div id="footer">
                <span style = "color:white;">Written by {this.author}</span>
                <br/>
                <a href="https://github.com/jiujiu12" target="_blank">
                    To Author's Github
                </a>
            </div>
        )
    }
}