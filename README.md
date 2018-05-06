# SublimeInput
SublimeInput est une bibliothèque Javascript permettant de modifier le style des inputs de vos pages HTML.

## Intégration
Pour intégrer SublimeInput dans vos pages HTML ajoutez les deux lignes suivantes dans la balise Head :
```
<script type="text/javascript" src="SublimeInput.js"></script>
<link rel="stylesheet" href="SublimeInput.css"/>
```
C'est tout vous pouvez maintenant commencer !

## Démarrer
Pour obtenir des inputs personnalisés, il vous suffit d'ajouter l'attribut correspondant sur votre input :
* **sub-input-check** pour des checkbox simples
* **sub-input-slide** pour des checkbox en mode slider
* **sub-input-radio** pour des boutons radios

### Exemple
```
<input type="radio" name="gender" value="female" sub-input-radio>Femme<br>
<input type="radio" name="gender" value="male" >Homme<br>
<input type="radio" name="gender" value="other" >Autre<br>
```
C'est tout !

## Modifier l'aspect des inputs
Comme vous pouvez le constater les inputs ne sont pas très beau et ils ressemblent beaucoup à ceux d'origine.
Pour avoir vos propres inputs, je vous invite à ouvrir le fichier **SublimeInput.css** et à modifier son contenu.
Les éléments avec une classe **.SublimeInput_qqch** sont les éléments en fond et les **span** sont les éléments de devant.


