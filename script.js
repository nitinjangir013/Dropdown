var isDropdownOpened =false;
// 	Show Dropdown	
function showDropdown()
{
	var startHeight = 5;
	const maxHeight = 200;
	const timing = 1;
	const selectedDropdown = document.getElementsByClassName("main-dropdown")[0];
	const selectedDropdownMenu = document.getElementsByClassName("dropdown-menu")[0];

	const dropdownInterval = setInterval(function(){
		if(startHeight <= maxHeight)
		{
			    startHeight= startHeight+10;
				selectedDropdownMenu.style.height = startHeight+'px';
				document.querySelector(".arrow").style.transform = "rotate(180deg)";
		}
		else
		{
			clearInterval(dropdownInterval);
		}

	},timing);
	 
	

}
//Hide Dropdown
function hideDropdown()
{
	var startHeight = 200;
	const minHeight = 5;
	const timing = 1;
	const selectedDropdown = document.getElementsByClassName("main-dropdown")[0];
	const selectedDropdownMenu = document.getElementsByClassName("dropdown-menu")[0];
		
	

	 const dropdownInterval = setInterval(function(){
		if(startHeight >= minHeight)
		{
			    startHeight= startHeight-10;
				selectedDropdownMenu.style.height = startHeight+'px';
				document.querySelector(".arrow").style.transform = "rotate(0deg)";
		}
		else
		{
			clearInterval(dropdownInterval);
		}

	},timing);
	 


}

// Toggle Dropdown
function toggleDropdown()
{
		if(isDropdownOpened)
		{
			hideDropdown();
			console.log("Hiding dropdown");

		}
		else
		{
			showDropdown();
			console.log("Showing dropdown");
		}
		
isDropdownOpened = !isDropdownOpened;
		

}