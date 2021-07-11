var familypics=[
"father.jfif",
"mother.png",
"grandfather-images-clipart-4.jpg",
"grandmother.jfif",
"grand mom sister.jfif",
"boozo.jfif",
"sister.jpg",
"rebecca.jpg"]

var names=["Nirnay","Sharon","Albert","Renuka","Kumari","Boozo","Utkrishta","Rebecca"];
var i=0;
function update()
{
    i++;
    numbers_of_family_member_in_array = 9;
    if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = familypics[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
}