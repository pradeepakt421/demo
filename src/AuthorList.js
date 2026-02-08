import {books} from "./BookJSON.js"
import "./AuthorList.css"
function AuthorList(){

    let authorList=[];
    for(let i of books){
        authorList.push(<tr><td>{i.author}</td></tr> )
    }

    return(
        <div className="authorlist-main-container">
            <h1>Author List</h1>
            <div className="author-list">
                
                <table>
                    <thead>
                        <th>Author Name</th>
                    </thead>
                    <tbody>
                        {authorList}
                    </tbody>

                </table>
            </div>
            
        </div>
    )
}

export default AuthorList;