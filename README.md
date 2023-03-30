# Detector-de-scanner
Detecta si la entrada de texto en el input es ingresado mediante un scanner o se tecleo.

El detector se puede utilizar para validar como entra la información. Es importante considerar que el funcionamiento de un scanner y un teclado ante la computadora es igual, sin embargo, considerando que el scanner al finalizar de digitar los numeros que escaneo da un enter, el tiempo que transcurre entre la acción de colocar el último digito y el enter es lo que se mide. Para un scanner el rango de tiempo es entre 7ms a 10 ms mientras que una persona que intente ganar presionando rapido enter en el teclado logra un rango de 50ms a 70ms. Con lo anterior se puede suponer que al tener un tiempo menor a 10ms se ingreso por medio de scanner.
