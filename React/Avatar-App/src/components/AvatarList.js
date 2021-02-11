import React from 'react';
import 'tachyons';

const AvatarList = (props) => {
    return(
      <div className='avatar ma4 bg-light-purple dib pa4 tc grow shadow-10'>
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Maansi" />
            <h1>{props.name}</h1>
            <p className="work">{props.work}</p>
        </div>
    )
}

export default AvatarList;