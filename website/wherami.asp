 
<% 
    Set pc = CreateObject("Wscript.Network") 
    response.write pc.ComputerName 
    Set pc = nothing 
%>