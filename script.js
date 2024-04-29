const projects = [
    { name: "Projeto 1", description: "Descrição do Projeto 1" },
    { name: "Projeto 2", description: "Descrição do Projeto 2" },
    { name: "Projeto 3", description: "Descrição do Projeto 3" }
  ];
  
  const projectList = document.getElementById('project-list');
  
  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    
    const projectName = document.createElement('h3');
    projectName.textContent = project.name;
    
    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    
    projectDiv.appendChild(projectName);
    projectDiv.appendChild(projectDescription);
    projectList.appendChild(projectDiv);
  });
