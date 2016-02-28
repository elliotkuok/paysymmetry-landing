desc "Uploads files to the machine at sinclairtarget.com via rsync"
task :deploy do
  sh 'rsync -avz * static@sinclairtarget.com:/srv/www/paysymmetry.com --exclude "Rakefile"'
end
