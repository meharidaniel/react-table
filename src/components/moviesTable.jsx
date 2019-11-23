import React, { Component } from 'react';
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';
import Like from './common/like';




class MoviesTable extends Component {
    columns= [
        {path: 'title', lable: 'Title'},
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
        <table className="table">
            <TableHeader 
                columns= { this.columns }
                sortColumn= { sortColumn}
                onSort= {onSort}
            />
            <TableBody 
                columns= { this.columns } 
                data= {movies} 
            />
            
        </table> 
        );
    }
}
 

export default MoviesTable;