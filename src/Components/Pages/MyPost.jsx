import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const MyPost = () => {
    return (
        <div className=" my-10 flex justify-center items-center">
             <Tabs>
    <TabList>
      <Tab>My Need Volunteer Post</Tab>
      <Tab>My Volunteer Request Post</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default MyPost;