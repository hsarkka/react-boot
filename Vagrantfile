VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "ubuntu/trusty64"

  # Configure virtual box specific settings
    config.vm.provider :virtualbox do |vb|
    vb.name = "dev"
    vb.customize ["modifyvm", :id, "--cpus", "2", "--memory", 4096]
  end

  config.vm.network "forwarded_port", guest: 80, host: 12345

  config.vm.synced_folder "./", "/home/vagrant/project/"

  config.vm.provision :ansible do |ansible|
    ansible.playbook = "ansible/playbook.yml"
  end

end
