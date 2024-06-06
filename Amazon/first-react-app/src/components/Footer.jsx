import React from 'react'
import logo from './logo.png'

const Footer = () => {
  return (
    <div>
    <div class="card-footer text-center text-body-secondary p-2" data-bs-theme="dark" id="hcolor">
        <a href='#'>Back to top</a>
    </div>
    <div class="card-footer text-body-secondary p-5  mfooter" data-bs-theme="dark" id="gcolor">
      <div className='d-flex'>
      <div className='col-3 ps-5'>

        <b className='lh-lg '>Get to Know Us<br/></b>
        About Us<br/>
        Careers<br/>
        Press Releases<br/>
        Amazon Science<br/>
      </div>
      <div className='col-3 ps-5'>

        <b className='lh-lg'>Connect with Us<br/></b>
        Facebook<br/>
        Twitter<br/>
        Instagram<br/>
      </div>
      <div className='col-3 ps-5'>

        <b className='lh-lg '>Make Money with Us<br/></b>
        Sell on Amazon<br/>
        Sell under Amazon Accelerator<br/>
        Protect and Build Your Brand<br/>
        Amazon Global Selling<br/>
        Become an Affiliate<br/>
        Fulfilment by Amazon<br/>
        Advertise Your Products<br/>
        Amazon Pay on Merchants<br/>
      </div>
      <div className='col-3 ps-5'>
        <b className='lh-lg'>Let Us Help You<br/></b>
        COVID-19 and Amazon<br/>
        Your Account<br/>
        Returns Centre<br/>
        100% Purchase Protection<br/>
        Amazon App Download<br/>
        Help<br/>
      </div>
    </div>
    <br/>
      <hr/>
      <div className='text-center p-3'>
      <img src={logo} className="imgpho" />
      </div>
    
      <br/>

    </div>
    <div class="card-footer text-body-secondary p-4 lfoot" data-bs-theme="dark" id="fcolor">
      <div class="d-flex">
      <div className='col-3 ps-5'>
      <div className='lh-sm'>
      <b className='lh-lg'>AbeBooks</b><br/>
          Books, art<br/>
          & collectibles<br/>
      </div>
      <br/>
      <div className='lh-sm'>
      <b className='lh-lg'>Shopbop</b><br/>
          Designer<br/>
          Fashion Brands<br/>
      </div>
      </div>

      <div className='col-3 ps-5'>
      <div className='lh-sm'>
      <b className='lh-lg'>Amazon Web Services</b><br/>
          Scalable Cloud<br/>
          Computing Services<br/>
      </div>
      <br/>
      <div className='lh-sm'>
      <b className='lh-lg'>Amazon Business</b><br/>
          Everything For<br/>
          Your Business<br/>
      </div>
      </div>

      <div className='col-3 ps-5'>
      <div className='lh-sm'>
      <b className='lh-lg'>Audible</b><br/>
          Download<br/>
          Audio Books		<br/>
      </div>
      <br/>
      <div className='lh-sm'>
      <b className='lh-lg'>Prime Now</b><br/>
          2-Hour Delivery<br/>
          on Everyday Items<br/>
      </div>
      </div>
      <div className='col-3 ps-5'>

        <div className='lh-sm'>
        <b className='lh-lg'>IMDb</b><br/>
          Movies, TV<br/>
          & Celebrities<br/>
        </div>
        <br/>
        <div className='lh-sm'>
        <b className='lh-lg'>Amazon Prime Music</b><br/>
          100 million songs, ad-free<br/>
          Over 15 million podcast episodes<br/>
        </div>
      </div>
      </div>
      <br/><br/><br/>
      <div className='text-center'>

Conditions of Use & Sale &nbsp;  Privacy Notice &nbsp; Interest-Based Ads<br/>
© 1996-2024, Amazon.com, Inc. or its affiliates
      </div>
    </div>

    </div>
  )
}

export default Footer