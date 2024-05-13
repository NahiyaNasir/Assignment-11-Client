import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import NeedPost from "../NeedPost";
import RequestPost from "../RequestPost";
import { Helmet } from "react-helmet-async";

const MyPost = () => {
    return (
       <div>
        <Helmet><title>My Post</title></Helmet>
         <div className=" my-10 flex justify-center items-center">
             <Tabs>
    <TabList>
      <Tab>My Need Volunteer Post</Tab>
      <Tab> Volunteers Request Post</Tab>
    </TabList>

    <TabPanel>
      <NeedPost></NeedPost>
    </TabPanel>
    <TabPanel>
    <RequestPost></RequestPost>
    </TabPanel>
  </Tabs>
        </div>
       </div>
    );
};

export default MyPost;