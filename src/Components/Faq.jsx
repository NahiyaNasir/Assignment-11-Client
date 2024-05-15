const Faq = () => {
  return (
    <div className=" ">
      <header className="bg-white dark:bg-gray-900">
        <nav className="border-t-4 border-blue-500">
          <div className="container flex items-center justify-between px-6 py-3 mx-auto"></div>
        </nav>

        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
       
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg ">
              <h1 className="text-4xl text-center text-green-300 my-10">Frequently Asked Questions</h1>
                  <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                    What are the benefits of volunteering?
                    </div>
                    <div className="collapse-content">
                      <p>Volunteering offers numerous benefits, including the opportunity to give back to your community, develop new skills, meet new people, and make a positive impact. It can also boost your self-confidence and sense of purpose.</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    How can I find volunteer opportunities?
                    </div>
                    <div className="collapse-content">
                      <p>There are several ways to find volunteer opportunities. You can start by contacting local nonprofit organizations, charities, or community centers directly.</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Do I need any specific skills or experience to volunteer?
                    </div>
                    <div className="collapse-content">
                      <p>Not necessarily. Many volunteer opportunities welcome individuals with a wide range of skills and experience levels. </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    How much time do I need to commit to volunteering?
                    </div>
                    <div className="collapse-content">
                      <p>The time commitment for volunteering can vary greatly depending on the organization and the specific role. Some opportunities may require only a few hours per week, while others may require a more significant time commitment. </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Can I volunteer remotely or virtually?
                    </div>
                    <div className="collapse-content">
                  
                      <p>Yes, Our organizations offer remote or virtual volunteer opportunities. </p>
                    </div>
                  </div>
                </div>
            
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full "
                src="https://i.ibb.co/WBXFMst/flat-questions-concept-illustration-52683-64276.jpg"
                alt="email illustration vector art"
              />
            </div>
          </div>
        </div>
      </header>

      {/*  fag */}

    
    </div>
  );
};

export default Faq;
