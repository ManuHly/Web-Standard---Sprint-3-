<% 
    if(session != null){
        session.invalidate();
        response.sendRedirect("../index.html");
    }
%>