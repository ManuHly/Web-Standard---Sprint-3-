<%@page language="java" import="java.sql.*" %>

<% 
    //Verifica se existe uma sessão
    if (session.getAttribute("usuario") == null) {
        out.print("Conteudo restrito. Realize o Login");
        out.print("<br><br>");
        out.print("<a href='../index.html'>Login</a>");

    }
    
    else {
        String vnome  = request.getParameter("Nome");
        String vcpf  =  request.getParameter("CPF");
        String vemail  = request.getParameter("Email");
        String vtelefone  = request.getParameter("Telefone");
        String vdata  = request.getParameter("Data");
        String vsenha  = request.getParameter("Senha1");

        //Variaveis para o Banco de Dados
        String banco = "zoologico";
        String endereco = "jdbc:mysql://localhost:3306/"+banco;
        String usuario = "root";
        String senha = "";

        //Variaveis para o Driver
        String driver = "com.mysql.jdbc.Driver";

        //Carregar Drive na Memoria
        Class.forName(driver);

        //Criar Variavel para conectar com o Banco de Dados
        Connection conexao;

        //Abrir a conexão com o Banco de Dados
        conexao = DriverManager.getConnection(endereco, usuario, senha);

        String sql = "SELECT * FROM cliente";

        PreparedStatement stm = conexao.prepareStatement(sql);
        ResultSet dados = stm.executeQuery();

        out.print("Bem Vindo(a) " + session.getAttribute("usuario") + "<br><br>");

        out.print("<a href='logout.jsp'>Sair</a>");

        out.print("<table border=1>");
            out.print("<tr>");
                out.print("<th>");
                    out.print("Codigo");
                out.print("</th>");
                out.print("<th>");
                    out.print("Nome");
                out.print("</th>");
                out.print("<th>");
                    out.print("Email");
                out.print("</th>");
                out.print("<th>");
                    out.print("Telefone");
                out.print("</th>");
            out.print("</tr>");

            while (dados.next()){
                out.print("<tr>");
                    out.print("<td>");
                        out.print(dados.getString("cod_cliente"));
                    out.print("</td>");
                    out.print("<td>");
                        out.print(dados.getString("nome"));
                    out.print("</td>");
                    out.print("<td>");
                        out.print(dados.getString("email"));
                    out.print("</td>");
                    out.print("<td>");
                        out.print(dados.getString("telefone"));
                    out.print("</td>");
                out.print("</tr>");
            }
        out.print("</table>");
        
    }   

%>