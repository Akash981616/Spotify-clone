import { HeartIcon, HomeIcon, LibraryIcon, PlusCircleIcon, RssIcon, SearchIcon } from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="text-gray-500 p=5 text-sm border-r border-gray-900">
      <div className="space-y-5">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>
       
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>CreatePlaylist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songst</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>YOur episode</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>
       <p className="cursor-pointer hover:text-white">Playlist className..</p>
       <p className="cursor-pointer hover:text-white">Playlist className..</p>
       <p className="cursor-pointer hover:text-white">Playlist className..</p>
       <p className="cursor-pointer hover:text-white">Playlist className..</p>
       <p className="cursor-pointer hover:text-white">Playlist className..</p>
       <p className="cursor-pointer hover:text-white">Playlist className..</p>
       <p className="cursor-pointer hover:text-white">Playlist className..</p>
       <p className="cursor-pointer hover:text-white">Playlist className..</p>
       <p className="cursor-pointer hover:text-white">Playlist className..</p>
      </div>
    </div>
  );
};

export default Sidebar;
