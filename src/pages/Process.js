import React from 'react';
import '../styles/bio.css';
import Menu from '../components/menu/Menu';

export default class Process extends React.Component{
    render() {
        return (

            <div className="bio-content">
                <Menu />
                    <div className="bio_text-container">
                        <div className="bio">
                            <p className="bio-text">
                            <span class="font-weight">Atelier ELEEN HALVORSEN </span>
                            takes pride in being a slow-fashion atelier where we create our own avant-garde
                            universe at our own pace. We welcome clients on appointment basis for an 
                            one-on-one customized experience. Our garments are hand crafted with the 
                            utmost attention to detail and quality, focusing on natural fabrics like silk, 
                            leather, wool and linen- with the goal of creating unique investment pieces our
                            clients will fall in love with and cherish for a long time to come, with the 
                            garment aging beautifully with its wearer. We focus on local, ethical production,
                            one-of-a-kind pieces, and a high-end made-to-order philosophy.
                            </p>
                            <p className="bio-text">
                            <span className="font-weight">Our collections. </span>
                            Rather than coming up with new separate collections each season,
                            we focus on creating a consistently unique brand identity, with
                            strong, timeless garments that clients can build on for a long 
                            time to come. We introduce new themes periodically, and 
                            within each theme we launch our spring and autumn collections, 
                            as well as unique objects and art pieces.
                            </p>
                            <p className="bio-text">
                            <span className="font-weight">Leather.</span> All of our leather products are made from bi-product 
                            leather from the food industry, focusing mainly on vegetable tanned leather, 
                            which is the oldest and most intricate process of tanning leather, 
                            relying on natural vegetable tannings from tree bark or other plant sources. 
                            </p>
                            <p className="bio-text">
                            Our<span className="font-weight"> Molded Leather Objects</span> collection is a series of ongoing 
                            individual developments. All objects are hand made-to-order from vegetable 
                            tanned leather. The in-house leather molding process is a slow and passionate 
                            process individually executed by hand over the span of a few days. 
                            When ready, the piece is branded, hand dyed, polished and edge 
                            finished individually using only as much dye and finish needed, 
                            minimizing any unnecessary waste water. 
                            </p>
                            <p className="bio-text">
                            <span className="font-weight">Care and after life.</span> To prolong the life of every garment, 
                            as well as leaving a minimal impact on the environment, we encourage our 
                            customers to take good care of their Eleen Halvorsen pieces and follow the 
                            care instructions that is written individually for each piece. Hand wash in 
                            cold water instead of machine wash and spot clean whenever possible. 
                            </p>
                            <p className="bio-text">
                            Should one of your garments need repair, we are happy to examine your 
                            old Eleen Halvorsen pieces and assess whether we can repair it to 
                            prolong its life for you. 
                            </p>
                            <p className="bio-text">
                            <span className="font-weight">Packaging.</span> We use recycled and upcycled packaging material. 
                            Our hangtags and other promotional materials are made from recycled paper.  
                            </p>
                        </div>
                    </div>
                <span className="copyRight">&copy;2019 eleen halvorsen</span>
            </div>
        );

    }
}
