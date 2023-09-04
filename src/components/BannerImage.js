import React , {Component} from "react";
import Laundromat from "../images/banner.jpeg";
console.log(Component)
class BannerImage extends Component {
    render() {
        return (
            <>
                <img src={Laundromat} className="w-100" alt="Laundromat"/>
            </>
        )
    }
}

export default BannerImage;