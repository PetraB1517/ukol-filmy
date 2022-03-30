import React from "react";
import './style.css';

const Actor = ({name,as},{key}) => {
	key={key};
    return (
      	<div className="actor">
			<h4 className="actor__name">{name}</h4>
			<p className="actor__as">jako {as}</p>
			
					
		</div>

    );
  }

export default Actor;
