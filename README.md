# GITHUB UI CLONE WITH THEME SWITCH - DARK | LIGHT

Ceci est un clone de l'UI (l'interface utilisateur) du site web GitHub avec un petit d'ajout, qu'à mon avis fait toute la différence d'UX (d'expérience utilisateur), le Dark Mode.

J'ai développé ce projet pour pouvoir parler un peu sur le Dark Mode (ou Mode sombre) et démontrer l'intérêt de l'implémenter dans nos projets web et mobile.

Vous pouvez visiter le site par ce lien : shorturl.at/bjACG , et tirer vous propres conclusions en alternant entre le mode Dark et Light à l'aide du bouton Switch trouvé dans l'en-tête de la page.
Ah ! Si vous voulez le tester sur votre propre repositoire Github ou un autre, il vous suffit d'utiliser la barre de recherche, ça fonctionne aussi ;)

##Introduction

De nos jours, le Dark Mode devient de plus en plus tendance dans le monde des applications (principalement sur smartphone). On peut le retrouver sur des applications populaires telles qu'Instagram, Youtube, Twitter, WhatsApp ou encore Facebook. Les principaux fabricants de smartphones ont même ajouté l’option dans les paramètres de leur système d’exploitation.

<p float="center">
  <img src="https://github.com/walternj/GitHub-UI-Clone-With-Dark-Mode/blob/main/Img_Light.png" width="47%" />
   <img src="https://github.com/walternj/GitHub-UI-Clone-With-Dark-Mode/blob/main/Img_Dark.png" width="47%" />
</p>


##Les Avantages du Dark Mode

Confort et Santé Visuel
1) Le dark mode réduit la fatigue des yeux en simplifiant la hiérarchie du contenu et en minimisant les distractions visuelles.

2) Il permet donc de prévenir, dans une certaine mesure, les maux de tête ou une sécheresse oculaire lors d'une utilisation prolongée d’un écran. Les informations affichées sur l’écran sont plus faciles à lire dans les environnements sombres ou tamisés, le matin et le soir par exemple.
Moi particulièrement, je l'utilise par tout, et ça a vraiment épargné mes yeux pendant les longues journées de "codage" ;D.

3) Le mode sombre facilite la lisibilité du contenu lorsque la lumière est faible. Il produit aussi moins de lumière bleue que le mode classique. Cela permet de diminuer l’impact négatif des écrans sur le cycle de sommeil.

##Économie d'énergie
Les smartphones équipés d’écrans OLED désactivent les pixels noirs lorsqu’ils ne sont pas utilisés. Le mode sombre utilisant de nombreux pixels noirs, cela permet à l’appareil d’utiliser moins d’énergie.
Google a réalisé des tests en utilisant YouTube en mode sombre et a obtenu une économie d’énergie comprise entre 14% et 60% (selon la luminosité de l'écran).


##Alors, on met du dark mode partout?
###Malgré ces bénéfices, on doit être judicieux au moment d'utiliser le mode sombre.

##Quand on doit l'utiliser ?

1) Pour des applications axées sur la vie nocturne/divertissement (Netflix, Youtube, Spotify, Instagran…)
2) Pour une interface qui est utilisée à longueur de journée (de type messagerie, intranet, IDE ou logiciel de PAO/CAO)
3) Pour un site qui a besoin de faire ressortir une image de luxe, de prestige
4) Pour un site qui a besoin de jouer sur les émotions (par exemple, faire ressortir un sentiment d'intrigue et de mystère)

##Quand on ne doit pas l'utiliser ?

1) Pour des interfaces très chargées en texte
2) Pour des sites qui ont beaucoup de types de contenus différents affichés en même temps à l'écran (textes, images, vidéo, tableaux, ...)
3) Pour des sites où les formulaires sont très nombreux
4) Pour des sites avec un design trop complexe (jeu de textures ou gamme de couleurs trop large)


##Quelques conseils :

Laisser la possibilité à l’utilisateur d’activer/désactiver l’option

Il est préférable de ne pas imposer ce mode. Il peut être proposé à l’utilisateur, soit par une icône directement accessible dans le header, soit dans les paramètres du site ou de l’application.

Vous pouvez aussi proposer l’option d’un basculement automatique du thème clair au thème sombre et inversement, en fonction de l’heure de la journée.
Le passage d’un thème clair à un thème sombre est un changement visuel important, et il doit donc rester constamment sous le contrôle de l’utilisateur.


##Attention à la lisibilité et donc l’accessibilité

Le blanc (#000000) est une couleur vive et sa lecture est fatigante sur les arrière-plans de couleurs sombres.
Pour pallier à ce problème, Google Material Design recommande d'utiliser un blanc moins franc et légèrement plus sombre suivant le contexte :

Les textes importants – opacité de 87%
Le texte d’importance moyenne et le texte d’aide – opacité de 60%
Le texte d’éléments désactivés – opacité de 38%

####Ça marche aussi pour le noir donc: 

Éviter le vrai noir (#000000)
Il est préférable d'utiliser un gris foncé comme couleur de fond principale.
Un texte clair sur une surface gris foncé a moins de contraste que du texte clair sur une surface noire, il sera plus lisible.
Le gris permet aussi l’utilisation d’une plus large gamme de couleurs, et donc une hiérarchisation plus simple de l’information. 
Il est aussi plus facile d'appréhender les ombres (et donc la profondeur) sur un fond gris plutôt qu’un fond noir.
Dans son guide du Dark Theme, Google Material Design recommande d’utiliser le gris foncé #121212, comme couleur de fond pour un thème sombre.

##Conclusion

Le Dark Mode est très populaire. Les principales plates-formes ont commencé à le prendre en charge, et les utilisateurs l'utilisent de plus en plus.
Mais attention, il ne s'applique pas à tous les sites web et app, donc à l’utiliser à bon escient.
