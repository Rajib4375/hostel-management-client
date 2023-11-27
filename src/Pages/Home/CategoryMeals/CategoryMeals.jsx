import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseFoods from '../../../hooks/UseFoods';
import FoodTab from './FoodTab/FoodTab';
import Meals from '../../Meals/Meals';

const CategoryMeals = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [foods] = UseFoods();

    const breakfast = foods.filter(item => item.category === 'breakfast');
    const lunch = foods.filter(item => item.category === 'lunch');
    const dinner = foods.filter(item => item.category === 'dinner');

    return (
        <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
  <Tab>All Meals</Tab>
    <Tab>Breakfast</Tab>
    <Tab>Lunch</Tab>
    <Tab>Dinner</Tab>
  </TabList>
  <TabPanel>
  <Meals></Meals>
  </TabPanel>
  <TabPanel>
  <FoodTab items={breakfast}></FoodTab>
  </TabPanel>
  <TabPanel>
    <FoodTab items={lunch}></FoodTab>
  </TabPanel>
  <TabPanel>
    <FoodTab items={dinner}></FoodTab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default CategoryMeals;