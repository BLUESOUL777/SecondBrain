import { Button } from '../components/ui/Button';
import '../App.css';
import {PlusIcon} from '../icons/PlusIcon';
import {ShareIcon} from '../icons/ShareIcon';
import {Card} from '../components/ui/Card'
import { CreateContentModel } from '../components/ui/CreateContentModel';
import { useState } from 'react';
import { Sidebar } from '../components/ui/Sidebar';

export function Dashboard(){
  const [contentModel , setContentModel] = useState(false);
  return (
    <div>
    <Sidebar/>
    <div className='p-5 bg-gray-100 min-h-screen ml-80'>
      <CreateContentModel open={contentModel} onClose={()=>{setContentModel(false)}}/>
      <div className='flex justify-end gap-2 '>
        <Button 
          startIcon = {<ShareIcon size={"md"}/>}
          variant="primary" 
          size="sm" 
          text='Share Brain'
        />
        <Button 
          startIcon = {<PlusIcon size={"md"}/>}
          variant="secondary" 
          size="sm" 
          onClick={() => setContentModel(true)}
          text='Attach Content'
        />
      </div>
      <div className='flex gap-10 pt-5'>
        <Card 
          title="Arm Wrestling"
          type="youtube"
          link="https://www.youtube.com/watch?v=wt-mcONv5p8"
        />
        <Card
          title="Random Twitter Post"
          type="twitter"
          link="https://x.com/kirat_tw/status/1633685473821425666"
        />
        <Card
          title="Random Twitter Post"
          type="twitter"
          link="https://x.com/kirat_tw/status/1633685473821425666"
        />
      </div>
    </div>
    </div>
  )
}
