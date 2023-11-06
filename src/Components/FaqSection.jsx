import img from '../assets/5066368.jpg'


const FaqSection = () => {



  return (
  <div className='flex flex-col lg:flex-row mb-10'>

<div className='w-3/6'>
<img className='w-96' src={img} alt="" />

</div>


<div>
<div className="">
      <div className="collapse collapse-arrow bg-teal-800 text-white">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
   Can i update the Assignment Details ?
  </div>
  <div className="collapse-content"> 
    <p> yes you can update anoyone assignment details very easily to go the update assignment route. </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-teal-800 text-white">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    For post what can i have to do ? tell me the process.
  </div>
  <div className="collapse-content"> 
    <p> If you want post any assignment you can follow this process.
    <br />
    1. Go to Regestraion if you don't have any account and do log in. <br />
    2. After that going to the create assignment page and paste your all assignment data in form and submit it. </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-teal-800 text-white ">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How do I register as a user on the platform?
  </div>
  <div className="collapse-content"> 
    <p>To register, click on the "Regester" button and fill in the required information. Once registered, you'll be added to the list of friends by default.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-teal-800 text-white ">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Can I give feedback or grades on my friends' assignments?
  </div>
  <div className="collapse-content"> 
    <p>Yes, you can grade your friends' assignments. After they submit, you can provide feedback and assign a grade. The grading criteria can be set by you or your group.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-teal-800 text-white ">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  What are the privacy and security measures in place to protect my data and interactions?
  </div>
  <div className="collapse-content"> 
    <p>We take your privacy and security seriously. Our platform uses encryption, and we have strict data protection policies in place. Check our privacy policy for more details.</p>
  </div>
</div>
    </div>
</div>




  </div>




  );
};

export default FaqSection;