import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from './common/like';
import Table from './common/table';




class MoviesTable extends Component {
    columns= [
    {path: 'title', lable: 'Title', content: movie =><Link to= {`/movies/?{movies._id}`} >{movie.title}</Link>},
        {path: 'genre.name', lable: 'Genra'},
        {path: 'numberInStock', lable: 'Stock'},
        {path: 'dailyRentalRate', lable: 'Rate'},
        { 
            key: 'Like', 
            content: movie => <Like liked= {movie.liked}
            onClick= {() => this.props.onLike(movie)} 
            /> 
        },
        { 
            key: 'delete', 
            content: movie =>(<button 
                    onClick = {() => this.props.onDelete(movie) } 
                    className= "btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                ) 
        }
    ];

    render() { 

        const { movies,  
                onSort, 
                sortColumn 
                } = this.props;

        return ( 
        <Table 
            columns= {this.columns}
            data= {movies}
            sortColumn= {sortColumn}
            onSort= {onSort}
        />
        );
    }
}
 

export default MoviesTable;