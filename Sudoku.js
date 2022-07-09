
//Trustero Sudoku backend homework//
//function takes in 2d array and outputs bool//
 var isValidSudoku = function(board) {
 //defining sets and variables to keep track of currently known variables
    let row= new Set(), column= new Set(), sector = new Set();
    let posR, posC, posS = 0;
    
    for (let x= 0; x < 9; x++){
        
        //clear sets after every iteration//
        row.clear(), column.clear(), sector.clear();
        
        for( let y = 0; y < 9; y++){
         //define current positions in Row, Column, and 3x3 sector
            posR = board[x][y],
            posC = board[y][x],
            posS = board[3 * Math.floor(x/3) + Math.floor(y/3)][3 * (x%3) + (y%3)];
            
            //check for dummy data//
            if (posR != '.'){
                //check for duplicates in Row//
                if( row.has(posR))   
                    return false  
                    row.add(posR);
                }
           
                //check for dummy data//
             if (posC != '.'){
                //check for duplicates in Column//
               if( column.has(posC)) 
                   return false  
                 column.add(posC);
             }
            
             //check for dummy data//
             if (posS != '.'){
                //check for duplicates in sector//
               if( sector.has(posS))  
                   return false  
                sector.add(posS);
             }
        }
    }
    //congratulations its a valid board//
    return true
    
};