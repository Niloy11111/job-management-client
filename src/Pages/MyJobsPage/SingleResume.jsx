

const SingleResume = ({item}) => {

    const { resume, photo , jobCategory, userName, email } = item ;
    return (
        <div className="flex justify-between mb-2">
            <h2 className=" font-Inter"> {userName}</h2>
          <a href={resume}>  <button className="py-2 bg-purple-300 rounded px-4 text-sm">Download Resume</button></a>
        </div>
    );
};

export default SingleResume;