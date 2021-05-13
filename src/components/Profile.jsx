import React from 'react';

const Profile = () => {
    return(
      <div className= 'content'>
        <div className= 'profile-wrapper'>

          <div className= 'mainPanel'>
            <div className= 'mainBackground'>
              <img src="https://us.123rf.com/450wm/klug/klug1004/klug100400002/6759836-tree-of-desires-on-cape-burhan-of-olkhon-island-on-lake-baikal-russia.jpg?ver=6"/>
            </div>
            <div className='avatar'>
              ava + descr
            </div>

            <div className='profileButtons'>
              Timeline -- About -- Friends
            </div>
          </div>

          <div className='myIntro'> 
            Profile intro
          </div>

          <div className='myPosts'>
            my posts
            <div>
              new post
            </div>
            <div>
            Post 1
            </div>
            <div>
              Post 2
            </div>
          </div>

          <div className='lastPhotos'> 
            LAST Photos
          </div>


        </div>
      </div>

    )
}

export default Profile;