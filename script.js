var display = (input, callback = () =>{}) => { 
       let counter = setTimeout(() => {
        document.getElementById('text').innerText=input;
        callback(); 
    }, 1000);    
}

display(10, 
    () => display(9, 
        () => display(8, 
            () => display(7, 
                () => display(6,
                    () => display(5,
                        () => display(4,
                            () => display(3,
                                () => display(2,
                                    () => display(1,
                                        () => display('Happy Independence Day!')
                                    )
                                )
                            )
                        )
                    )
                )
            )
        ) 
    )
);