var colsA = 2,
    rowsA = 3,
    colsB = 2,
    rowsB = 2,
    time;

$(document).ready(function () 
{
    if( $('#radioA').prop("checked") )
    {
        console.log("a",rowsA,colsA);
        if (rowsA == 10)
        {
            $('#delRow').removeAttr("disabled");
            $('#addRow').attr("disabled","disabled");
        }
        if (rowsA == 2)
        {
            $('#addRow').removeAttr("disabled");
            $('#delRow').attr("disabled","disabled");
        }
        if (colsA == 10)
        {
            $('#delCol').removeAttr("disabled");
            $('#addCol').attr("disabled","disabled");
        }
        if (colsA == 2)
        {
            $('#addCol').removeAttr("disabled");
            $('#delCol').attr("disabled","disabled");
        }
    }  
    if ( $('#radioB').prop("checked") )
    {
        console.log("b",rowsB,colsB);
        if (rowsB == 10)
        {
            $('#delRow').removeAttr("disabled");
            $('#addRow').attr("disabled","disabled");
        }
        if (rowsB == 2)
        {
            $('#addRow').removeAttr("disabled");
            $('#delRow').attr("disabled","disabled");
        }
        if (colsB == 10)
        {
            $('#delCol').removeAttr("disabled");
            $('#addCol').attr("disabled","disabled");
        }
        if (colsB == 2)
        {
            $('#addCol').removeAttr("disabled");
            $('#delCol').attr("disabled","disabled");
        }
    }
});

// Очистить
function reset ()
{
    $('.reply').val('');
}

// Поменять местами
function change ()
{
    var rA = rowsA,
        cA = colsA;
    $('#matrix-div-a,#matrix-div-b,#reply').empty();

    rowsA = rowsB;
    rowsB = rA;
    colsA = colsB;
    colsB = cA;
    render(colsA,rowsA,colsB,rowsB);
}

// Смена background левого дива
function setFocus ()
{
    $('.change').focus(function ()
    {
        $('#left-block').css({'background':'rgb(81,153,219)'});
        $('#error').text("");
    });
    $('.change').focusout(function () 
    {
        $('#left-block').css({'background':'rgb(188,188,188)'});
    });
}

function radioBtnChange ()
{
    if( $('#radioA').prop("checked") )
    {
        console.log("a",rowsA,colsA);
        if (rowsA == 10)
        {
            $('#delRow').removeAttr("disabled");
            $('#addRow').attr("disabled","disabled");
        }
        else
        {
            $('#addRow').removeAttr("disabled");
        }
        if (rowsA == 2)
        {
            $('#addRow').removeAttr("disabled");
            $('#delRow').attr("disabled","disabled");
        }
        else
        {
            $('#delRow').removeAttr("disabled");
        }
        if (colsA == 10)
        {
            $('#delCol').removeAttr("disabled");
            $('#addCol').attr("disabled","disabled");
        }
        else
        {
            $('#addCol').removeAttr("disabled");
        }
        if (colsA == 2)
        {
            $('#addCol').removeAttr("disabled");
            $('#delCol').attr("disabled","disabled");
        }
        else
        {
            $('#delCol').removeAttr("disabled");
        }
    }  
    if ( $('#radioB').prop("checked") )
    {
        console.log("b",rowsB,colsB);
        if (rowsB == 10)
        {
            $('#delRow').removeAttr("disabled");
            $('#addRow').attr("disabled","disabled");
        }
        else
        {
            $('#addRow').removeAttr("disabled");
        }
        if (rowsB == 2)
        {
            $('#addRow').removeAttr("disabled");
            $('#delRow').attr("disabled","disabled");
        }
        else
        {
            $('#delRow').removeAttr("disabled");
        }
        if (colsB == 10)
        {
            $('#delCol').removeAttr("disabled");
            $('#addCol').attr("disabled","disabled");
        }
        else
        {
            $('#addCol').removeAttr("disabled");
        }
        if (colsB == 2)
        {
            $('#addCol').removeAttr("disabled");
            $('#delCol').attr("disabled","disabled");
        }
        else
        {
            $('#delCol').removeAttr("disabled");
        }
    }
}
//Добавить/удалить строку
function addRow ()
{
    $('#error').text("");
    if( $('#radioA').prop("checked") )
    {
        if (rowsA != 10)
        {
            rowsA += 1;
            $('#left-block').css({'background':'rgb(188,188,188)'});
            $('#matrix-div-a,#matrix-div-b,#reply').empty();
            $('#delRow').removeAttr("disabled");
            render(colsA,rowsA,colsB,rowsB);
        }
        if (rowsA == 10)
        {
            $('#addRow').attr("disabled","disabled");
        }
    }  
    if ( $('#radioB').prop("checked") )
    {
        if (rowsB != 10)
        {
            rowsB += 1;
            $('#left-block').css({'background':'rgb(188,188,188)'});
            $('#matrix-div-a,#matrix-div-b,#reply').empty();
            $('#delRow').removeAttr("disabled");
            render(colsA,rowsA,colsB,rowsB);
        }
        if (rowsB == 10)
        {
            $('#addRow').attr("disabled","disabled");
        }
    }
}

function delRow ()
{
    $('#error').text("");
    if( $('#radioA').prop("checked") )
    {
        if (rowsA != 2)
        {
            rowsA -= 1;
            $('#left-block').css({'background':'rgb(188,188,188)'});
            $('#matrix-div-a,#matrix-div-b,#reply').empty();
            $('#addRow').removeAttr("disabled");
            render(colsA,rowsA,colsB,rowsB);
        }
        if (rowsA == 2)
        {
            $('#delRow').attr("disabled","disabled");
        }
    }
    if ( $('#radioB').prop("checked") )
    {
        if (rowsB != 2)
        {
            rowsB -= 1;
            $('#left-block').css({'background':'rgb(188,188,188)'});
            $('#matrix-div-a,#matrix-div-b,#reply').empty();
            $('#addRow').removeAttr("disabled");
            render(colsA,rowsA,colsB,rowsB);
        }
        if (rowsB == 2)
        {
            $('#delRow').attr("disabled","disabled");
        }
    }
}

//Добавить/удалить столбец
function addCol ()
{
    $('#error').text("");
    if( $('#radioA').prop("checked") )
    {
        if (colsA != 10)
        {
            colsA += 1;
            $('#left-block').css({'background':'rgb(188,188,188)'});
            $('#matrix-div-a,#matrix-div-b,#reply').empty();
            $('#delCol').removeAttr("disabled");
            render(colsA,rowsA,colsB,rowsB);
        }
        if (colsA == 10)
        {
            $('#addCol').attr("disabled","disabled");
        }
    }
    if ( $('#radioB').prop("checked") )
    {
        if (colsB != 10)
        {
            colsB += 1;
            $('#left-block').css({'background':'rgb(188,188,188)'});
            $('#matrix-div-a,#matrix-div-b,#reply').empty();
            $('#delCol').removeAttr("disabled");
            render(colsA,rowsA,colsB,rowsB);
        }
        if (colsB == 10)
        {
            $('#addCol').attr("disabled","disabled");
        }
    }
}

function delCol ()
{
    $('#error').text("");
    if( $('#radioA').prop("checked") )
    {
        if (colsA != 2)
        {
            colsA -= 1;
            $('#left-block').css({'background':'rgb(188,188,188)'});
            $('#matrix-div-a,#matrix-div-b,#reply').empty();
            $('#addCol').removeAttr("disabled");
            render(colsA,rowsA,colsB,rowsB);
        }
        if (colsA == 2)
        {
            $('#delCol').attr("disabled","disabled");
        }
    }
    if ( $('#radioB').prop("checked") )
    {
        if (colsB != 2)
        {
            colsB -= 1;
            $('#left-block').css({'background':'rgb(188,188,188)'});
            $('#matrix-div-a,#matrix-div-b,#reply').empty();
            $('#addCol').removeAttr("disabled");
            render(colsA,rowsA,colsB,rowsB);
        }
        if (colsB == 2)
        {
            $('#delCol').attr("disabled","disabled");
        }
    }
}

var matrixA   = [],
    matrixB   = [],
    matrixR   = [],
    matrixRes =  0, 
    valA      = [],
    valB      = [],
    reply     = [];
//Умножить
function multiply ()
{
    $('#error').text("");
    // Подходит ли матрицы для умножения
    if (colsA == rowsB) 
    {
        //Собираем массив значений из матрицы А
        var matrixAinputs = document.querySelectorAll('#matrix-div-a input');

        var idA = 0;
        for(var i = 1; i < rowsA + 1; i++) 
        { 
            matrixA[i] = [];
            // if (matrixBinputs[i].value != "") 
            // {
            //     flag = true;
            // }
            // else
            // {
            //     matrixBinputs[i].value = 0;
            // } 
            for (var j = 1; j < colsA + 1; j++) 
            {   
                matrixA[i][j] = matrixAinputs[idA].value;
                idA++;
            }
        }

        //Собираем массив значений из матрицы B
        var matrixBinputs = document.querySelectorAll('#matrix-div-b input');

        var idB = 0;
        for(var i = 1; i < rowsB + 1; i++) 
        { 
            // if (matrixBinputs[i].value != "") 
            // {
            //     flag = true;
            // }
            // else
            // {
            //     matrixBinputs[i].value = 0;
            // } 

            matrixB[i] = [];
            for (var j = 1; j < colsB + 1; j++) 
            {   
                matrixB[i][j] = matrixBinputs[idB].value;
                idB++;
            }
        } 

        //Умножаем Матрицу А и Матрицу Б
        for (var i = 1; i < rowsA + 1; i++) 
        {
            matrixR[i] = [];
            for (var j = 1; j < colsB + 1; j++) 
            {                    
                for (var k = 1; k < rowsB + 1; k++) 
                {
                    matrixRes += matrixA[i][k] * matrixB[k][j];
                    console.log(i,j,k, matrixRes ,matrixA[i][k],matrixB[k][j]);
                }
                matrixR[i][j] = matrixRes;
                
                matrixRes = 0;
            }
        }
        
        //Собираем в массив инпуты
        var matrixRinputs = document.querySelectorAll('.result');

        for(var i = 0; i < rowsA * colsB; i++) 
        { 
            reply[i] = matrixRinputs[i];
        }
        var idR = 0;
        for (var i = 1; i < rowsA + 1; i++) 
        {
            for (var j = 1; j < colsB + 1; j++) 
            {
                $(reply[idR]).val(matrixR[i][j]);
                console.log(reply[idR]);
                idR++;
            }
        }
    }
    else
    {
        $('#left-block').css({'background':'rgb(246, 193, 192)'});
        $('#error').text("Такие матрицы нельзя перемножить,так как количество столбцов матрицы А не равно количеству строк матрицы В");
        return (false);
    }
}

// Генерация матриц  
function render (colsA,rowsA,colsB,rowsB) 
{
    // Генерация матрицы Ответа
    for (var i = 1; i < rowsA + 1 ; i++) 
    {
        for (var j = 1; j < colsB + 1 ; j++) 
        { 
            $('#reply').append('<input type="text" class="reply result" placeholder="'+ i +','+ j +'" readonly>');  
        }
        $('#reply').append('<br>');
    }
    // Генерация матрицы А
    for (var i = 1; i < rowsA + 1 ; i++) 
    {
        for (var j = 1; j < colsA + 1 ; j++) 
        {
            $('#matrix-div-a').append('<input type="text" class="reply change"  placeholder="'+ i +','+ j +'" >');
        }
        $('#matrix-div-a').append('<br>');
    } 
    $('#matrix-div-a').append('<label id="am" class="lable">А</label>');
    // Генерация матрицы В
    for (var i = 1; i < rowsB + 1 ; i++) 
    {
        for (var j = 1; j < colsB + 1 ; j++) 
        { 
            $('#matrix-div-b').append('<input type="text" class="reply change"  placeholder="'+ i +','+ j +'">');
        }
        $('#matrix-div-b').append('<br>');
    }   
    $('#matrix-div-b').append('<label id="bm" class="lable">B</label>');
}
