import useUsers from "@/hooks/useUsers";
import Avatar from "./Avatar";
import useFollow from "@/hooks/useFollow";


const FollowBar = () => {
  const {data: users = []} = useUsers();
  // const { isFollowing, toggleFollow } = useFollow('');

  if(users.length === 0){
    return null;
  }
  return (
    <div className='px-6 py-4 hidden lg:block'>
      <div className='bg-neutral-800 rounded-xl p-4'>
        <h2 className='text-white text-xl font-semibold'>Who to follow</h2>
        <div className='flex flex-col gap-6 mt-4'>
          {/* TODO USER LIST */}
          {users.map((user: Record<string, any>)=>(
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar userId={user.id} />
                <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.name}</p>
                <p className="text-neutral-400 text-sm">@{user.username}</p>
                {/* <Button
            onClick={toggleFollow} 
            label={isFollowing ? 'Unfollow' : 'Follow'}
            secondary={!isFollowing}
            outline={isFollowing}
          /> */}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FollowBar;