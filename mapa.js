// Primero creo un nuevo objeto "Phaser.Game" y especifico el tamaño (800x550)
var juego = new Phaser.Game(800, 550, Phaser.CANVAS, "mapalol");
// Ahora declaro todas las variables
// Esta la variable del fondo 
var fondojuego;
// estos son los botones de navegacipon por el mapa 
var boton1;
var boton2;
var boton3;
var boton4;
// Estos son los iconos de los monstruos
var monstruo1;
var monstruo2;
var monstruo3;
var monstruo4;
var monstruo5;
var monstruo6;
var monstruo7;
var monstruo8;
var monstruo9;
var monstruo1a;
var monstruo2a;
var monstruo3a;
var monstruo6a;
var monstruo7a;
var monstruo8a;
var monstruo9a;
// Este es el estilo que se aplica a los textos
var style = { font: "16px Arial", fill: "#FFFFFF",};
// Estos son los textos 
var texto1;
var texto2;
var texto3;
var texto4;
var texto5;
var texto6;
var texto7;
var texto8;
var texto9;
var texto1a;
var texto2a;
var texto3a;
var texto6a;
var texto7a;
var texto8a;
var texto9a;
// Estas son las fotos que aparecen al hacerle click a los iconos de los monstruios
var foto1;
var foto2;
var foto3;
var foto4;
var foto5;
var foto6;
var foto7;
var foto8;
var foto9;
// Estas son las variables de las teclas con las que se navega por el mapa
var flechaderecha;
var flechaizquierda;
var flechaarriba;
var flechaabajo;
var right = false;
var left = false;
var up = false;
var down = false;
// Aqui defino la variable del juego
var jugar = {
	preload: function() {  
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // Con esto se escala la imagen si se reduce el tamaño de la ventana
        // Ahora cargo todas las imagenes que se apareceran en el mapa
        // Aqui cargo la imagen del fondo del mapa
		juego.load.image("fondo", "imagenes/mapa.png"); 
        // Aqui cargo la imagen de los votones de navegacion por el mapa
		juego.load.image("boton1", "imagenes/BOTON1.png");
        juego.load.image("boton2", "imagenes/BOTON2.png");
        // Aqui cargo la imagenes de los iconos de los monstruos
        juego.load.image("m1", "imagenes/1.jpg");
        juego.load.image("m2", "imagenes/2.png");
        juego.load.image("m3", "imagenes/3.jpg");
        juego.load.image("m4", "imagenes/4.png");
        juego.load.image("m5", "imagenes/5.png");
        juego.load.image("m6", "imagenes/6.jpg");
        juego.load.image("m7", "imagenes/7.png");
        juego.load.image("m8", "imagenes/8.jpg");
        juego.load.image("m9", "imagenes/9.png");
        // Aqui cargo las imagenes que aparecen al hacer click en los iconos de los monstruos
        juego.load.image("f1", "imagenes/foto1.jpg");
        juego.load.image("f2", "imagenes/foto2.jpg");
        juego.load.image("f3", "imagenes/foto3.jpg");
        juego.load.image("f4", "imagenes/foto4.jpg");
        juego.load.image("f5", "imagenes/foto5.jpg");
        juego.load.image("f6", "imagenes/foto6.jpg");
        juego.load.image("f7", "imagenes/foto7.jpg");
        juego.load.image("f8", "imagenes/foto8.jpg");
        juego.load.image("f9", "imagenes/foto9.jpg");
        
	},
	
	create: function() { 
        // Aqui especifico el tamaño del fondo
		fondojuego = juego.add.tileSprite(0, 0, 800, 550, "fondo");
        //Aqui fijo una posicion que sera usada como referencia para las coordenas de los demas objetos del mapa
		fondojuego.tilePosition.x = -800;
        fondojuego.tilePosition.y = -550;

        
        
		//Estos son los iconos de los monstruos
        //Especifico que las coordenas del objeto son -40 en x y 250 en y hago referencia a la imagen que cargue previamente
		monstruo1 = juego.add.sprite(-40, 250, "m1");
        // Centro las coordenadas en la mitad del objeto, tanto vertical como horizontalmente
		monstruo1.anchor.setTo(0.5);	
        // Aqui escalo la imagen a un 50% de su tamaño real
        monstruo1.scale.setTo(0.5, 0.5)
        //Esto me permite asignar eventos al objeto
		monstruo1.inputEnabled = true;  
        
        //Y hago lo mismo con los demas
        
        monstruo2 = juego.add.sprite(30, 90 , "m2");
		monstruo2.anchor.setTo(0.5);
        monstruo2.scale.setTo(0.5, 0.5)
		monstruo2.inputEnabled = true;
        
        monstruo3 = juego.add.sprite(540, 790, "m3");
		monstruo3.anchor.setTo(0.5);	                                                 
        monstruo3.scale.setTo(0.5, 0.5)
		monstruo3.inputEnabled = true;                                              
        
        monstruo4 = juego.add.sprite(100, -10, "m4");
		monstruo4.anchor.setTo(0.5);	                                                 
        monstruo4.scale.setTo(0.8, 0.8)
		monstruo4.inputEnabled = true;                                              
        
        monstruo5 = juego.add.sprite(725, 620, "m5");
		monstruo5.anchor.setTo(0.5);	                                                 
        monstruo5.scale.setTo(0.8, 0.8)
		monstruo5.inputEnabled = true;                                              
        
        monstruo6 = juego.add.sprite(-40, 390, "m6");
		monstruo6.anchor.setTo(0.5);	                                                 
        monstruo6.scale.setTo(0.5, 0.5)
		monstruo6.inputEnabled = true;                                              
        
        monstruo7 = juego.add.sprite(-230, 190, "m7");
		monstruo7.anchor.setTo(0.5);                                                 
        monstruo7.scale.setTo(0.5, 0.5)
		monstruo7.inputEnabled = true;                                              
        
        monstruo8 = juego.add.sprite(350, 500, "m8");
		monstruo8.anchor.setTo(0.5);	                                                 
        monstruo8.scale.setTo(0.5, 0.5)
		monstruo8.inputEnabled = true;                                              
        
        monstruo9 = juego.add.sprite(460, 650, "m9");
		monstruo9.anchor.setTo(0.5);	                                                 
        monstruo9.scale.setTo(0.5, 0.5)
		monstruo9.inputEnabled = true;                                              
        
        //Como en el mapa hay monstruos que se repiten los nombro de una manera similar y uso las mismas imagenes   
        monstruo1a = juego.add.sprite(860, 350, "m1");
		monstruo1a.anchor.setTo(0.5);	                                                 
        monstruo1a.scale.setTo(0.5, 0.5)
		monstruo1a.inputEnabled = true;                                              
        
        monstruo2a = juego.add.sprite(770, 520 , "m2");
		monstruo2a.anchor.setTo(0.5);
        monstruo2a.scale.setTo(0.5, 0.5)
		monstruo2a.inputEnabled = true;
        
        monstruo3a = juego.add.sprite(280, -180, "m3");
		monstruo3a.anchor.setTo(0.5);	                                                 
        monstruo3a.scale.setTo(0.5, 0.5)
		monstruo3a.inputEnabled = true;                                              
        
        monstruo6a = juego.add.sprite(835, 210, "m6");
		monstruo6a.anchor.setTo(0.5);	                                                
        monstruo6a.scale.setTo(0.5, 0.5)
		monstruo6a.inputEnabled = true;                                              
        
        monstruo7a = juego.add.sprite(1050, 420, "m7");
		monstruo7a.anchor.setTo(0.5);                                                 
        monstruo7a.scale.setTo(0.5, 0.5)
		monstruo7a.inputEnabled = true;                                              
        
        monstruo8a = juego.add.sprite(450, 90, "m8");
		monstruo8a.anchor.setTo(0.5);	                                                 
        monstruo8a.scale.setTo(0.5, 0.5)
		monstruo8a.inputEnabled = true;                                              
        
        monstruo9a = juego.add.sprite(360, -38, "m9");
		monstruo9a.anchor.setTo(0.5);	                                                 
        monstruo9a.scale.setTo(0.5, 0.5)
		monstruo9a.inputEnabled = true;
        
        //Estos son los textos que aparecen arriba de los iconos de los monstruos. A cada uno le especifico sus coordenada, escribo lo que contien cada uno y le aplico el estilo nombrado previamente.
        texto1= juego.add.text(-40, 210, "Guardián Azul", style);
        //Las coordenadas iran al centro de los textos
        texto1.anchor.setTo(0.5);
        //Los textos no seran visibles por ahora
        texto1.visible=false;
        texto2= juego.add.text(30, 50, "Escurridizo", style);
        texto2.anchor.setTo(0.5);
        texto2.visible=false;
        texto3= juego.add.text(540, 750, "Rocosos", style);
        texto3.anchor.setTo(0.5);
        texto3.visible=false;
        texto4= juego.add.text(100, -70, "Barón Nashor", style);
        texto4.anchor.setTo(0.5);
        texto4.visible=false;
        texto5= juego.add.text(725, 560, "Dragón", style);
        texto5.anchor.setTo(0.5);
        texto5.visible=false;
        texto6= juego.add.text(-40, 350, "Lóbregos", style);
        texto6.anchor.setTo(0.5);
        texto6.visible=false;
        texto7= juego.add.text(-230, 150, "Grompo", style);
        texto7.anchor.setTo(0.5);
        texto7.visible=false;
        texto8= juego.add.text(350, 460, "Dagarracos", style);
        texto8.anchor.setTo(0.5);
        texto8.visible=false;
        texto9= juego.add.text(460, 610, "Espino Rojo", style);
        texto9.anchor.setTo(0.5);
        texto9.visible=false;
        //Estos son los textos repetidos
        texto1a= juego.add.text(860, 310, "Guardián Azul", style);
        texto1a.anchor.setTo(0.5);
        texto1a.visible=false;
        texto2a= juego.add.text(770, 480, "Escurridizo", style);
        texto2a.anchor.setTo(0.5);
        texto2a.visible=false;
        texto3a= juego.add.text(280, -220, "Rocosos", style);
        texto3a.anchor.setTo(0.5);
        texto3a.visible=false;
        texto6a= juego.add.text(835, 170, "Lóbregos", style);
        texto6a.anchor.setTo(0.5);
        texto6a.visible=false;
        texto7a= juego.add.text(1050, 380, "Grompo", style);
        texto7a.anchor.setTo(0.5);
        texto7a.visible=false;
        texto8a= juego.add.text(450, 50, "Dagarracos", style);
        texto8a.anchor.setTo(0.5);
        texto8a.visible=false;
        texto9a= juego.add.text(360, -78, "Espino Rojo", style);
        texto9a.anchor.setTo(0.5);
        texto9a.visible=false;                          

		//Aqui creo los botones de navegacion por el mapa usando las imagenes de las flechas que cargué. Especifico las coordenas y le asgno su funcion correspondiente.
		boton1 = juego.add.button(40, 275, "boton1", this.izquierda, this);
        //Aqui centro las coordenafas
		boton1.anchor.setTo(0.5);           
        //Aqui cambio la escala de los botones, ya que su tamaño original es mas grande de lo requerido
		boton1.scale.setTo(-0.05, 0.05);
        //Aqui especifico que la opacidad del boton es de un 40%
		boton1.alpha = 0.4;                       
		boton2 = juego.add.button(760, 275, "boton1", this.derecha, this);
		boton2.anchor.setTo(0.5);
		boton2.scale.setTo(0.05, 0.05);
		boton2.alpha = 0.4;
        boton3 = juego.add.button(400, 40, "boton2", this.arriba, this);
		boton3.anchor.setTo(0.5);
		boton3.scale.setTo(0.05, 0.05);
		boton3.alpha = 0.4;
        boton4 = juego.add.button(400, 510, "boton2", this.abajo, this);
		boton4.anchor.setTo(0.5);
		boton4.scale.setTo(0.05, -0.05);
		boton4.alpha = 0.4;
        
        //Aqui activo las teclas arriba, abajo, izquierda y derecha del teclado
		flechaderecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);  
		flechaizquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);	
        flechaarriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);  
        flechaabajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);	
		
        // Aqui defino instancias a las acciones con el botón ( over, out, down, up )
		boton1.events.onInputOver.add(function(){left=true;});  
        boton1.events.onInputOut.add(function(){left=false;});
        boton1.events.onInputDown.add(function(){left=true;});
        boton1.events.onInputUp.add(function(){left=false;});
		
		boton2.events.onInputOver.add(function(){right=true;});  
        boton2.events.onInputOut.add(function(){right=false;});
        boton2.events.onInputDown.add(function(){right=true;});
        boton2.events.onInputUp.add(function(){right=false;});
        
        boton3.events.onInputOver.add(function(){up=true;});  
        boton3.events.onInputOut.add(function(){up=false;});
        boton3.events.onInputDown.add(function(){up=true;});
        boton3.events.onInputUp.add(function(){up=false;});
        
        boton4.events.onInputOver.add(function(){down=true;});  
        boton4.events.onInputOut.add(function(){down=false;});
        boton4.events.onInputDown.add(function(){down=true;});
        boton4.events.onInputUp.add(function(){down=false;});
        
        //Estas son las imagenes que aparecen al hacer clic en los iconos
        //Especifico las coordenas del objeto, que sera en el centro de la pantalla, y la imagen que usare
        foto1 = juego.add.image (400, 275, "f1");
        //Centro las coordnedas
        foto1.anchor.setTo(0.5); 
        //Cambio la escala de la imagen para que cuadre bien dentro de la pantalla
		foto1.scale.setTo(0.35, 0.35);  
        foto1.visible=false;
        foto2 = juego.add.image (400, 275, "f2");
        foto2.anchor.setTo(0.5);           
		foto2.scale.setTo(0.5, 0.5);  
        foto2.visible=false;
        foto3 = juego.add.image (400, 275, "f3");
        foto3.anchor.setTo(0.5);           
		foto3.scale.setTo(0.35, 0.35);  
        foto3.visible=false;
        foto4 = juego.add.image (400, 275, "f4");
        foto4.anchor.setTo(0.5);           
		foto4.scale.setTo(0.37, 0.37);  
        foto4.visible=false;
        foto5 = juego.add.image (400, 275, "f5");
        foto5.anchor.setTo(0.5);           
		foto5.scale.setTo(0.43, 0.43);  
        foto5.visible=false;
        foto6 = juego.add.image (400, 275, "f6");
        foto6.anchor.setTo(0.5);           
		foto6.scale.setTo(0.36, 0.36);  
        foto6.visible=false;
        foto7 = juego.add.image (400, 275, "f7");
        foto7.anchor.setTo(0.5);           
		foto7.scale.setTo(0.42, 0.42);  
        foto7.visible=false;
        foto8 = juego.add.image (400, 275, "f8");
        foto8.anchor.setTo(0.5);           
		foto8.scale.setTo(0.36, 0.36);  
        foto8.visible=false;
        foto9 = juego.add.image (400, 275, "f9");
        foto9.anchor.setTo(0.5);           
		foto9.scale.setTo(0.5, 0.5);  
        foto9.visible=false;
        
        //Aqui asigno las funciones que correran cuando cuando pose el maouse por encima de los iconos, cuando lo quite, cuando les haga click, y cuando los suelte
        monstruo1.events.onInputOver.add(this.mostrart1);
        monstruo1.events.onInputOut.add(this.ocultart1);
        monstruo2.events.onInputOver.add(this.mostrart2);
        monstruo2.events.onInputOut.add(this.ocultart2);
        monstruo3.events.onInputOver.add(this.mostrart3);
        monstruo3.events.onInputOut.add(this.ocultart3); 
        monstruo4.events.onInputOver.add(this.mostrart4);
        monstruo4.events.onInputOut.add(this.ocultart4); 
        monstruo5.events.onInputOver.add(this.mostrart5);
        monstruo5.events.onInputOut.add(this.ocultart5); 
        monstruo6.events.onInputOver.add(this.mostrart6);
        monstruo6.events.onInputOut.add(this.ocultart6); 
        monstruo7.events.onInputOver.add(this.mostrart7);
        monstruo7.events.onInputOut.add(this.ocultart7); 
        monstruo8.events.onInputOver.add(this.mostrart8);
        monstruo8.events.onInputOut.add(this.ocultart8); 
        monstruo9.events.onInputOver.add(this.mostrart9);
        monstruo9.events.onInputOut.add(this.ocultart9);
        //Los mismo con los iconos repetidos 
        monstruo1a.events.onInputOver.add(this.mostrart1a);
        monstruo1a.events.onInputOut.add(this.ocultart1a);
        monstruo2a.events.onInputOver.add(this.mostrart2a);
        monstruo2a.events.onInputOut.add(this.ocultart2a);
        monstruo3a.events.onInputOver.add(this.mostrart3a);
        monstruo3a.events.onInputOut.add(this.ocultart3a); 
        monstruo6a.events.onInputOver.add(this.mostrart6a);
        monstruo6a.events.onInputOut.add(this.ocultart6a); 
        monstruo7a.events.onInputOver.add(this.mostrart7a);
        monstruo7a.events.onInputOut.add(this.ocultart7a); 
        monstruo8a.events.onInputOver.add(this.mostrart8a);
        monstruo8a.events.onInputOut.add(this.ocultart8a); 
        monstruo9a.events.onInputOver.add(this.mostrart9a);
        monstruo9a.events.onInputOut.add(this.ocultart9a); 
        
        monstruo1.events.onInputDown.add(this.mostrarf1);
        monstruo1.events.onInputUp.add(this.ocultarf1);
        monstruo2.events.onInputDown.add(this.mostrarf2);
        monstruo2.events.onInputUp.add(this.ocultarf2);
        monstruo3.events.onInputDown.add(this.mostrarf3);
        monstruo3.events.onInputUp.add(this.ocultarf3); 
        monstruo4.events.onInputDown.add(this.mostrarf4);
        monstruo4.events.onInputUp.add(this.ocultarf4); 
        monstruo5.events.onInputDown.add(this.mostrarf5);
        monstruo5.events.onInputUp.add(this.ocultarf5); 
        monstruo6.events.onInputDown.add(this.mostrarf6);
        monstruo6.events.onInputUp.add(this.ocultarf6); 
        monstruo7.events.onInputDown.add(this.mostrarf7);
        monstruo7.events.onInputUp.add(this.ocultarf7); 
        monstruo8.events.onInputDown.add(this.mostrarf8);
        monstruo8.events.onInputUp.add(this.ocultarf8); 
        monstruo9.events.onInputDown.add(this.mostrarf9);
        monstruo9.events.onInputUp.add(this.ocultarf9); 
        monstruo1a.events.onInputDown.add(this.mostrarf1);
        monstruo1a.events.onInputUp.add(this.ocultarf1);
        monstruo2a.events.onInputDown.add(this.mostrarf2);
        monstruo2a.events.onInputUp.add(this.ocultarf2);
        monstruo3a.events.onInputDown.add(this.mostrarf3);
        monstruo3a.events.onInputUp.add(this.ocultarf3); 
        monstruo6a.events.onInputDown.add(this.mostrarf6);
        monstruo6a.events.onInputUp.add(this.ocultarf6); 
        monstruo7a.events.onInputDown.add(this.mostrarf7);
        monstruo7a.events.onInputUp.add(this.ocultarf7); 
        monstruo8a.events.onInputDown.add(this.mostrarf8);
        monstruo8a.events.onInputUp.add(this.ocultarf8); 
        monstruo9a.events.onInputDown.add(this.mostrarf9);
        monstruo9a.events.onInputUp.add(this.ocultarf9); 
	},
	
	update: function(){ 
		//Aqui especifico que cuando respectiva tecla (arriba, abajo, isquierda o derecha) esté oprimida, se ejecuta una funcion (que hace que se mueva)
		if(flechaizquierda.isDown){
			this.izquierda();
		}
		if(flechaderecha.isDown){				
			this.derecha();        
		}
        if(flechaarriba.isDown){
			this.arriba();
		}
		if(flechaabajo.isDown){				
			this.abajo();
        //Esas mismas funciones se ejecutaran cuando en vez de oprimir las teclas, se ponga el mouse encima de las flechas de navegacion
        }
		if(right){
			this.derecha();
        //En el caso contrario la opacidad del boton sera de un 40%
		}else {
			boton2.alpha = 0.4;
		}	
		if(left){
			this.izquierda();	
		} else {
			boton1.alpha = 0.4;
		}
        if(up){
			this.arriba();
		}else {
			boton3.alpha = 0.4;
		}	
		if(down){
			this.abajo();	
		} else {
			boton4.alpha = 0.4;
		}	
        

	},
//Aqui se plantean las funciones nombradas anteriormente
	 izquierda: function(){  
         //Especifico el limite de desplazamiento del fonto hacia la izquierda
		 if (fondojuego.tilePosition.x < 0){ 
            //Aqui especifico el movimiento del fondo
	        fondojuego.tilePosition.x += 2; 
			//Aqui especifico que todos los iconos de los monstruos se muevan igual que se mueve el fondo para que no pierdan su posicion dentro del mapa
            monstruo1.position.x +=2;
            monstruo2.position.x +=2;
            monstruo3.position.x +=2;
            monstruo4.position.x +=2;
            monstruo5.position.x +=2;
            monstruo6.position.x +=2;
            monstruo7.position.x +=2;
            monstruo8.position.x +=2;
            monstruo9.position.x +=2;
            monstruo1a.position.x +=2;
            monstruo2a.position.x +=2;
            monstruo3a.position.x +=2;
            monstruo6a.position.x +=2;
            monstruo7a.position.x +=2;
            monstruo8a.position.x +=2;
            monstruo9a.position.x +=2;
            //igualmente los textos se moveran con el fondo            
            texto1.position.x +=2;
            texto2.position.x +=2;
            texto3.position.x +=2;
            texto4.position.x +=2;
            texto5.position.x +=2;
            texto6.position.x +=2;
            texto7.position.x +=2;
            texto8.position.x +=2;
            texto9.position.x +=2;
            texto1a.position.x +=2;
            texto2a.position.x +=2;
            texto3a.position.x +=2;
            texto6a.position.x +=2;
            texto7a.position.x +=2;
            texto8a.position.x +=2;
            texto9a.position.x +=2;
            //Cuando se activa la funcion la opacidad del boton es de un 100%
            boton1.alpha = 1;                      
		 }
     },
	 //Igualmente con las funciones de desplazamiento hacia la derecha, arriba y abajo
    
	 derecha: function(){
         //Este es el limite de desplazamiento del fondo hacia la derecha
		 if (fondojuego.tilePosition.x > -1600){  
	        fondojuego.tilePosition.x -= 2;
            monstruo1.position.x -=2;
            monstruo2.position.x -=2;
            monstruo3.position.x -=2;
            monstruo4.position.x -=2;
            monstruo5.position.x -=2;
            monstruo6.position.x -=2;
            monstruo7.position.x -=2;
            monstruo8.position.x -=2;
            monstruo9.position.x -=2;
            monstruo1a.position.x -=2;
            monstruo2a.position.x -=2;
            monstruo3a.position.x -=2;
            monstruo6a.position.x -=2;
            monstruo7a.position.x -=2;
            monstruo8a.position.x -=2;
            monstruo9a.position.x -=2;
             
            texto1.position.x -=2;
            texto2.position.x -=2;
            texto3.position.x -=2;
            texto4.position.x -=2;
            texto5.position.x -=2;
            texto6.position.x -=2;
            texto7.position.x -=2;
            texto8.position.x -=2;
            texto9.position.x -=2;
            texto1a.position.x -=2;
            texto2a.position.x -=2;
            texto3a.position.x -=2;
            texto6a.position.x -=2;
            texto7a.position.x -=2;
            texto8a.position.x -=2;
            texto9a.position.x -=2;
			boton2.alpha = 1;
		 }
	 },
    arriba: function(){  
        //Limite del desplazamiento del fondo hacia arriba
		 if (fondojuego.tilePosition.y < 0){  
	        fondojuego.tilePosition.y += 2;      
            monstruo1.position.y +=2;
            monstruo2.position.y +=2;
            monstruo3.position.y +=2;
            monstruo4.position.y +=2;
            monstruo5.position.y +=2;
            monstruo6.position.y +=2;
            monstruo7.position.y +=2;
            monstruo8.position.y +=2;
            monstruo9.position.y +=2;
            monstruo1a.position.y +=2;
            monstruo2a.position.y +=2;
            monstruo3a.position.y +=2;
            monstruo6a.position.y +=2;
            monstruo7a.position.y +=2;
            monstruo8a.position.y +=2;
            monstruo9a.position.y +=2;
             
            texto1.position.y +=2;
            texto2.position.y +=2;
            texto3.position.y +=2;
            texto4.position.y +=2;
            texto5.position.y +=2;
            texto6.position.y +=2;
            texto7.position.y +=2;
            texto8.position.y +=2;
            texto9.position.y +=2;
            texto1a.position.y +=2;
            texto2a.position.y +=2;
            texto3a.position.y +=2;
            texto6a.position.y +=2;
            texto7a.position.y +=2;
            texto8a.position.y +=2;
            texto9a.position.y +=2;
			boton3.alpha = 1;                     
		 }
     },
	 abajo: function(){ 
         //Limite de desplazamiento del fondo hacia abajo
		 if (fondojuego.tilePosition.y > -1100){  
	        fondojuego.tilePosition.y -= 2;
            monstruo1.position.y -=2;
            monstruo2.position.y -=2;
            monstruo3.position.y -=2;
            monstruo4.position.y -=2;
            monstruo5.position.y -=2;
            monstruo6.position.y -=2;
            monstruo7.position.y -=2;
            monstruo8.position.y -=2;
            monstruo9.position.y -=2;
            monstruo1a.position.y -=2;
            monstruo2a.position.y -=2;
            monstruo3a.position.y -=2;
            monstruo6a.position.y -=2;
            monstruo7a.position.y -=2;
            monstruo8a.position.y -=2;
            monstruo9a.position.y -=2;
             
            texto1.position.y -=2;
            texto2.position.y -=2;
            texto3.position.y -=2;
            texto4.position.y -=2;
            texto5.position.y -=2;
            texto6.position.y -=2;
            texto7.position.y -=2;
            texto8.position.y -=2;
            texto9.position.y -=2;
            texto1a.position.y -=2;
            texto2a.position.y -=2;
            texto3a.position.y -=2;
            texto6a.position.y -=2;
            texto7a.position.y -=2;
            texto8a.position.y -=2;
            texto9a.position.y -=2;
			boton4.alpha = 1;
		 }
	 },
        //Esta es la funcion que hace que el texto se haga visible
        mostrart1: function(){
        texto1.visible= true;
        },
        //Esta es la funcion que hace que el texto no sea visible
        ocultart1: function(){
        texto1.visible= false;
        },
        //Se hace lo mismo con las funciones de los demas textos
        mostrart2: function(){
        texto2.visible= true;
        },
        ocultart2: function(){
        texto2.visible= false;
        },
        mostrart3: function(){
        texto3.visible= true;
        },
        ocultart3: function(){
        texto3.visible= false;
        },
        mostrart4: function(){
        texto4.visible= true;
        },
        ocultart4: function(){
        texto4.visible= false;
        },
        mostrart5: function(){
        texto5.visible= true;
        },
        ocultart5: function(){
        texto5.visible= false;
        },
        mostrart6: function(){
        texto6.visible= true;
        },
        ocultart6: function(){
        texto6.visible= false;
        },
        mostrart7: function(){
        texto7.visible= true;
        },
        ocultart7: function(){
        texto7.visible= false;
        },
        mostrart8: function(){
        texto8.visible= true;
        },
        ocultart8: function(){
        texto8.visible= false;
        },
        mostrart9: function(){
        texto9.visible= true;
        },
        ocultart9: function(){
        texto9.visible= false;
        },
    
        mostrart1a: function(){
        texto1a.visible= true;
        },
        ocultart1a: function(){
        texto1a.visible= false;
        },
        mostrart2a: function(){
        texto2a.visible= true;
        },
        ocultart2a: function(){
        texto2a.visible= false;
        },
        mostrart3a: function(){
        texto3a.visible= true;
        },
        ocultart3a: function(){
        texto3a.visible= false;
        },
        mostrart6a: function(){
        texto6a.visible= true;
        },
        ocultart6a: function(){
        texto6a.visible= false;
        },
        mostrart7a: function(){
        texto7a.visible= true;
        },
        ocultart7a: function(){
        texto7a.visible= false;
        },
        mostrart8a: function(){
        texto8a.visible= true;
        },
        ocultart8a: function(){
        texto8a.visible= false;
        },
        mostrart9a: function(){
        texto9a.visible= true;
        },
        ocultart9a: function(){
        texto9a.visible= false;
        },
        
        //Estas son las funciones de las imagenes que aparecen al hacer click en los iconos
        //Con esta se muestra la imagen
        mostrarf1: function(){
        foto1.visible= true;
        },
        //Con esta se oculta la imagen
        ocultarf1: function(){
        foto1.visible= false;
        },
        //Igualmente con las demas imagenes
        mostrarf2: function(){
        foto2.visible= true;
        },
        ocultarf2: function(){
        foto2.visible= false;
        },
        mostrarf3: function(){
        foto3.visible= true;
        },
        ocultarf3: function(){
        foto3.visible= false;
        },
        mostrarf4: function(){
        foto4.visible= true;
        },
        ocultarf4: function(){
        foto4.visible= false;
        },
        mostrarf5: function(){
        foto5.visible= true;
        },
        ocultarf5: function(){
        foto5.visible= false;
        },
        mostrarf6: function(){
        foto6.visible= true;
        },
        ocultarf6: function(){
        foto6.visible= false;
        },
        mostrarf7: function(){
        foto7.visible= true;
        },
        ocultarf7: function(){
        foto7.visible= false;
        },
        mostrarf8: function(){
        foto8.visible= true;
        },
        ocultarf8: function(){
        foto8.visible= false;
        },
        mostrarf9: function(){
        foto9.visible= true;
        },
        ocultarf9: function(){
        foto9.visible= false;
        },

}
       

juego.state.add("activo", jugar);
juego.state.start("activo");
